import leaflet from 'leaflet';
import {
  Badge,
  Button,
  Drawer,
  Group,
  Image,
  List,
  ScrollArea,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { FilterItem } from 'static';
import { findMapDetails, mapFilters } from 'static';
import { useFilters } from '../../contexts/FiltersContext';
import { useMarkers } from '../../contexts/MarkersContext';
import { toTimeAgo } from '../../utils/dates';
import Markdown from '../Markdown/Markdown';
import Credit from '../MarkerDetails/Credit';
import { latestLeafletMap } from '../WorldMap/useWorldMap';
import type { MarkerRouteItem } from './MarkerRoutes';
import useMarkerRoute from './useMarkerRoute';
import DeleteRoute from './DeleteRoute';
import { notify } from '../../utils/notifications';
import { patchFavoriteMarkerRoute } from './api';
import { writeError } from '../../utils/logs';
import ForkRoute from './ForkRoute';
import { useUserStore } from '../../utils/userStore';
import shallow from 'zustand/shallow';
import { isEmbed, useRouteParams } from '../../utils/routes';
import { useQueryClient } from 'react-query';
import { IconRoute2 } from '@tabler/icons';

type MarkerRouteDetailsProps = {
  onEdit: (markerRoute: MarkerRouteItem) => void;
};
const MarkerRouteDetails = ({ onEdit }: MarkerRouteDetailsProps) => {
  const { routeId } = useRouteParams();
  const { data: markerRoute, refetch, isLoading } = useMarkerRoute(routeId);
  const navigate = useNavigate();
  const { account, refreshAccount } = useUserStore(
    (state) => ({
      account: state.account,
      refreshAccount: state.refreshAccount,
    }),
    shallow
  );
  const { markerRoutes, toggleMarkerRoute } = useMarkers();
  const { setFilters } = useFilters();
  const queryClient = useQueryClient();

  const editable =
    account &&
    markerRoute &&
    (account.isModerator || account.steamId === markerRoute.userId);
  const selected = Boolean(
    markerRoute &&
      markerRoutes.some(
        (selectedMarkerRoute) => selectedMarkerRoute._id == markerRoute._id
      )
  );

  useEffect(() => {
    if (!markerRoute || !latestLeafletMap) {
      return;
    }
    latestLeafletMap.fitBounds(markerRoute.positions);
  }, [markerRoute?._id]);

  useEffect(() => {
    if (!markerRoute || !latestLeafletMap || selected) {
      return;
    }

    const layerGroup = new leaflet.LayerGroup();

    const startHereCircle = leaflet.circle(markerRoute.positions[0], {
      pmIgnore: true,
      color: 'rgba(51, 136, 255, 0.6)',
    });
    const line = leaflet.polyline(markerRoute.positions, {
      pmIgnore: true,
      color: 'rgba(51, 136, 255, 0.6)',
    });
    startHereCircle.addTo(layerGroup);
    line.addTo(layerGroup);
    layerGroup.addTo(latestLeafletMap);

    return () => {
      layerGroup.off();
      layerGroup.remove();
    };
  }, [markerRoute?._id, selected]);

  const handleClose = () => {
    if (!markerRoute || !markerRoute.map) {
      navigate(`/${location.search}`);
    } else {
      const mapDetail = findMapDetails(markerRoute.map);
      if (mapDetail) {
        navigate(`/${mapDetail.title}${location.search}`);
      }
    }
  };

  const markerMapFilters: FilterItem[] = useMemo(() => {
    if (!markerRoute) {
      return [];
    }
    const result: FilterItem[] = [];
    Object.keys(markerRoute.markersByType).forEach((markerType) => {
      const mapFilter = mapFilters.find(
        (mapFilter) => mapFilter.type === markerType
      );
      if (mapFilter) {
        result.push(mapFilter);
      }
    });
    return result;
  }, [markerRoute?.markersByType]);

  function handleEdit(markerRoute: MarkerRouteItem) {
    toggleMarkerRoute(markerRoute, false);
    const types = Object.keys(markerRoute.markersByType);
    setFilters((filters) => [
      ...filters,
      ...types.filter((type) => !filters.includes(type)),
    ]);
    onEdit(markerRoute);
  }

  const isFavorite = Boolean(
    markerRoute &&
      account?.favoriteRouteIds?.some((routeId) => markerRoute._id === routeId)
  );

  async function handleFavorite(): Promise<void> {
    if (!account || !routeId) {
      return;
    }

    try {
      await notify(patchFavoriteMarkerRoute(routeId, !isFavorite), {
        success: 'Favored route changed 👌',
      });
      refreshAccount();
      refetch();
    } catch (error) {
      writeError(error);
    }
  }

  if (isEmbed) {
    if (!routeId) {
      return <></>;
    }
    let url = 'https://aeternum-map.gg/';
    if (markerRoute?.map) {
      const mapDetails = findMapDetails(markerRoute.map);
      if (mapDetails) {
        url += `${mapDetails.title}/`;
      }
    }
    url += `routes/${routeId}`;

    return (
      <Button
        variant="default"
        component="a"
        href={url}
        target="_blank"
        leftIcon={<IconRoute2 />}
        radius="xl"
        loading={!markerRoute}
      >
        {markerRoute?.name || 'Route'}
      </Button>
    );
  }

  return (
    <Drawer
      opened={!!routeId}
      withOverlay={false}
      padding="sm"
      size="xl"
      styles={(theme) => ({
        header: {
          marginBottom: theme.spacing.xs,
        },
      })}
      title={
        markerRoute ? (
          <Text>{markerRoute.name}</Text>
        ) : (
          <Skeleton height={20} width={120} />
        )
      }
      onClose={handleClose}
    >
      {!markerRoute && <Skeleton height={50} />}
      {markerRoute && (
        <Stack style={{ height: 'calc(100vh - 64px)' }} spacing="xs">
          <Group>
            <Badge size="sm" color="cyan">
              {markerRoute.regions.join(', ')}
            </Badge>
            <Badge size="sm" color={markerRoute.isPublic ? 'lime' : 'teal'}>
              {markerRoute.isPublic ? 'Public' : 'Private'}
            </Badge>
            <Badge leftSection="🤘" size="sm" color="orange">
              {markerRoute.favorites || 0} favored
            </Badge>
          </Group>
          <Text size="xs">
            Added {markerRoute && toTimeAgo(new Date(markerRoute.createdAt))}{' '}
            {markerRoute.username && <Credit username={markerRoute.username} />}
          </Text>
          {markerRoute.description && (
            <Text italic size="sm">
              <Markdown>{markerRoute.description}</Markdown>
            </Text>
          )}
          <ScrollArea style={{ flex: 1, minHeight: 100 }}>
            <List
              spacing="xs"
              styles={{
                itemWrapper: {
                  width: '100%',
                },
              }}
            >
              {markerMapFilters.length === 0 && isLoading && (
                <Skeleton height={40} />
              )}
              {markerMapFilters.length === 0 && !isLoading && 'No markers'}
              {markerMapFilters.map((markerMapFilter) => (
                <List.Item
                  key={markerMapFilter.type}
                  icon={
                    <Image
                      src={markerMapFilter.iconUrl}
                      alt={markerMapFilter.type}
                      width={24}
                      height={24}
                    />
                  }
                  sx={{
                    width: '100%',
                  }}
                >
                  {markerMapFilter.title}:{' '}
                  {markerRoute.markersByType[markerMapFilter.type]}x
                </List.Item>
              ))}
            </List>
          </ScrollArea>

          <Button
            title="Toggle route"
            variant={selected ? 'filled' : 'outline'}
            color="blue"
            onClick={() => {
              toggleMarkerRoute(markerRoute);
            }}
          >
            {selected ? 'Deselect route' : 'Select route'}
          </Button>
          <Button
            title="Toggle favorite"
            variant={isFavorite ? 'filled' : 'outline'}
            color="orange"
            disabled={!account}
            onClick={handleFavorite}
          >
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </Button>
          <ForkRoute
            markerRoute={markerRoute}
            onFork={async (markerRoute) => {
              toggleMarkerRoute(markerRoute, true);
              queryClient.invalidateQueries('routes');
              if (!markerRoute || !markerRoute.map) {
                navigate(`/routes/${markerRoute._id}/${location.search}`);
              } else {
                const mapDetail = findMapDetails(markerRoute.map);
                if (mapDetail) {
                  navigate(
                    `/${mapDetail.title}/routes/${markerRoute._id}${location.search}`
                  );
                }
              }
            }}
          />
          {editable && (
            <Button
              color="teal"
              leftIcon="✍"
              onClick={() => {
                handleEdit(markerRoute);
                handleClose();
              }}
            >
              Edit route
            </Button>
          )}
          <DeleteRoute
            routeId={markerRoute._id}
            onDelete={async () => {
              toggleMarkerRoute(markerRoute, false);
              queryClient.invalidateQueries('routes');
              handleClose();
            }}
          />
        </Stack>
      )}
    </Drawer>
  );
};

export default MarkerRouteDetails;
