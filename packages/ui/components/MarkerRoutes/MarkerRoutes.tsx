import {
  Box,
  Button,
  Group,
  Select,
  Skeleton,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { IconFilter } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import {
  findMapDetails,
  mapFilters,
  mapIsAeternumMap,
  // regionNames, //TODO: RYAN - posssibly use this instead of doing lookup on server in RouteSearch.tsx
} from 'static';
import { useMarkers } from '../../contexts/MarkersContext';
import { escapeRegExp } from '../../utils/regExp';
import { useMap } from '../../utils/routes';
import { usePersistentState } from '../../utils/storage';
import type { AccountDTO } from '../../utils/userStore';
import { useUserStore } from '../../utils/userStore';
import { useUpsertStore } from '../UpsertArea/upsertStore';
import { getMarkerRoutes } from './api';
import MarkerRoute from './MarkerRoute';
import RouteSearch from '../RouteSearch/RouteSearch';
import { useRouteSearchStore } from '../RouteSearch/routeSearchStore';

export type MarkerRouteItem = {
  _id: string;
  name: string;
  description?: string;
  userId: string;
  username: string;
  isPublic: boolean;
  isArchived: boolean;
  map?: string;
  positions: [number, number][];
  texts?: {
    position: number[];
    text: string;
  }[];
  regions: string[];
  markersByType: {
    [type: string]: number;
  };
  favorites?: number;
  forks?: number;
  comments?: number;
  issues?: number;
  createdAt: string;
  updatedAt: string;
};

type SortBy = 'date' | 'favorites' | 'name' | 'username';

function handleFilter(
  filters: string[],
  search: string,
  account: AccountDTO | null
) {
  const { markerRoutes } = useMarkers();
  const regExp = new RegExp(escapeRegExp(search), 'i');
  const filterBySearch = (item: MarkerRouteItem) => {
    if (search === '') {
      return true;
    }
    const matchedMarkersType = Object.keys(item.markersByType).some((type) => {
      const mapFilter = mapFilters.find((filter) => filter.type === type);
      if (!mapFilter) {
        return false;
      }
      return mapFilter.title.match(regExp);
    });
    return matchedMarkersType || item.name.match(regExp);
  };

  const complexFilter = (item: MarkerRouteItem) => {
    return (
      (filters?.length ?? 0) <= 0 ||
      !filters
        .map((filter) => {
          const [, filterCondition, filterValue] = filter.match(/(\w+): (.*)/)!;
          return (
            (filterCondition === 'is' &&
              filterValue === 'favorite' &&
              account?.favoriteRouteIds?.includes(item._id)) ||
            (filterCondition === 'is' &&
              filterValue === 'archived' &&
              item.isArchived) ||
            (filterCondition === 'is' &&
              filterValue === 'enabled' &&
              markerRoutes.find((marker) => marker._id == item._id)) ||
            (filterCondition.startsWith('author') &&
              item.username === filterValue) ||
            (filterCondition.startsWith('region') &&
              item.regions.includes(filterValue))
          );
        })
        .includes(false)
    );
  };

  return (item: MarkerRouteItem) => complexFilter(item) && filterBySearch(item);
}

function handleSort(sortBy: SortBy) {
  if (sortBy === 'favorites') {
    return (a: MarkerRouteItem, b: MarkerRouteItem) =>
      (b.favorites || 0) - (a.favorites || 0);
  }
  if (sortBy === 'date') {
    return (a: MarkerRouteItem, b: MarkerRouteItem) =>
      b.updatedAt?.localeCompare(a.updatedAt);
  }
  if (sortBy === 'name') {
    return (a: MarkerRouteItem, b: MarkerRouteItem) =>
      a.name.localeCompare(b.name);
  }
  if (sortBy === 'username') {
    return (a: MarkerRouteItem, b: MarkerRouteItem) =>
      a.username.localeCompare(b.username);
  }
  return (_a: MarkerRouteItem, _b: MarkerRouteItem) => {
    return 0;
  };
}

function MarkerRoutes(): JSX.Element {
  const { data: allMarkerRoutes = [], isLoading } = useQuery(
    ['routes'],
    getMarkerRoutes
  );
  const { markerRoutes, setMarkerRoutes, toggleMarkerRoute } = useMarkers();
  const account = useUserStore((state) => state.account);
  const upsertStore = useUpsertStore();
  const [sortBy, setSortBy] = usePersistentState<SortBy>(
    'markerRoutesSort',
    'date'
  );
  const [search, setSearch] = usePersistentState('searchRoutes', '');
  const filters = useRouteSearchStore((state) => state.routeFilters);

  const [limit, setLimit] = useState(10);
  const map = useMap();

  useEffect(() => {
    setLimit(10);
  }, [sortBy, filters, search]);

  useEffect(() => {
    const selectedMarkerRoutes: MarkerRouteItem[] = [];
    markerRoutes.forEach((markerRoute) => {
      const newMarkerRoute = allMarkerRoutes.find(
        (targetMarkerRoute) => targetMarkerRoute._id === markerRoute._id
      );
      if (newMarkerRoute) {
        selectedMarkerRoutes.push(newMarkerRoute);
      } else {
        selectedMarkerRoutes.push(markerRoute);
      }
    });
    setMarkerRoutes(selectedMarkerRoutes);
  }, [allMarkerRoutes]);

  const visibleMarkerRoutes = useMemo(
    () =>
      allMarkerRoutes.filter((markerRoute) => {
        if (markerRoute.map) {
          if (mapIsAeternumMap(map)) {
            return false;
          }
          if (findMapDetails(map) !== findMapDetails(markerRoute.map)) {
            return false;
          }
        } else if (!mapIsAeternumMap(map)) {
          return false;
        }
        return true;
      }),
    [allMarkerRoutes, map]
  );

  const sortedMarkerRoutes = useMemo(
    () =>
      visibleMarkerRoutes
        .filter(handleFilter(filters, search, account))
        .sort(handleSort(sortBy)),
    [sortBy, visibleMarkerRoutes, filters, search]
  );

  return (
    <Stack>
      <Group spacing="xs" grow>
        <Button
          disabled={!account}
          onClick={() => {
            upsertStore.setMarkerRoute(true);
          }}
        >
          {account ? 'Add route' : 'Sign in to add routes'}
        </Button>
        <Button onClick={() => setMarkerRoutes([])}>Hide all</Button>
      </Group>
      <RouteSearch />
      <Group spacing="xs" grow>
        <TextInput
          placeholder="Node or title..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          icon={<IconFilter />}
        />
        <Select
          value={sortBy}
          onChange={(value) => setSortBy(value as SortBy)}
          data={[
            { value: 'date', label: 'By date' },
            { value: 'favorites', label: 'By favorites' },
            { value: 'name', label: 'By name' },
            { value: 'username', label: 'By username' },
          ]}
        />
      </Group>
      <Box>
        {isLoading && <Skeleton height={40} />}
        {!isLoading && sortedMarkerRoutes.length === 0 && (
          <Text color="orange">No routes found</Text>
        )}
        {!isLoading &&
          sortedMarkerRoutes
            .slice(0, limit)
            .map((markerRoute) => (
              <MarkerRoute
                key={markerRoute._id}
                isOwner={markerRoute.userId === account?.steamId}
                markerRoute={markerRoute}
                selected={markerRoutes.some(
                  (selectedMarkerRoute) =>
                    selectedMarkerRoute._id == markerRoute._id
                )}
                onSelect={(checked) => toggleMarkerRoute(markerRoute, checked)}
              />
            ))}
        {sortedMarkerRoutes.length > limit && (
          <Button onClick={() => setLimit((limit) => limit + 10)} fullWidth>
            Load more
          </Button>
        )}
      </Box>
    </Stack>
  );
}

export default MarkerRoutes;
