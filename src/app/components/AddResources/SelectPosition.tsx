import { useState } from 'react';
import { useMarkers } from '../../contexts/MarkersContext';
import { useRouter } from '../Router/Router';
import useGeoman from './useGeoman';
import useLayerGroups from '../WorldMap/useLayerGroups';
import useWorldMap from '../WorldMap/useWorldMap';
import styles from './SelectPosition.module.css';
import type { FilterItem } from '../MapFilter/mapFilters';

type SelectPositionType = {
  filter: FilterItem;
  onSelect: (position: [number, number, number]) => void;
};
function SelectPosition({ filter, onSelect }: SelectPositionType): JSX.Element {
  const { markers } = useMarkers();
  const router = useRouter();
  const [x, setX] = useState(+(router.url.searchParams.get('x') || 0));
  const [y, setY] = useState(+(router.url.searchParams.get('y') || 0));
  const [z, setZ] = useState(0);

  const { leafletMap, elementRef } = useWorldMap({ selectMode: true });
  useGeoman({
    leafletMap,
    iconUrl: filter.iconUrl,
    filter,
    x,
    y,
    onMove: (x: number, y: number) => {
      setX(x);
      setY(y);
    },
  });
  useLayerGroups({
    markers,
    filters: [filter.type],
    leafletMap,
  });

  return (
    <div className={styles.container}>
      <aside className={styles.selection}>
        <label>
          Position X
          <input
            className={styles.input}
            type="number"
            placeholder="e.g. 9015.32"
            min={0}
            max={14336}
            step={0.01}
            value={x}
            onChange={(event) => setX(+(+event.target.value).toFixed(2))}
            required
          />
        </label>
        <label>
          Position Y
          <input
            className={styles.input}
            type="number"
            placeholder="e.g. 5015.12"
            min={0}
            max={14336}
            step={0.01}
            value={y}
            onChange={(event) => setY(+(+event.target.value).toFixed(2))}
            required
          />
        </label>
        <label>
          Position Z
          <input
            className={styles.input}
            type="number"
            placeholder="e.g. 120.82 (optional)"
            min={0}
            max={2000}
            step={0.01}
            value={z}
            onChange={(event) => setZ(+(+event.target.value).toFixed(2))}
          />
        </label>
      </aside>
      <div className={styles.map} ref={elementRef} />
      <button className={styles.save} onClick={() => onSelect([x, y, z])}>
        Save Position
      </button>
    </div>
  );
}

export default SelectPosition;
