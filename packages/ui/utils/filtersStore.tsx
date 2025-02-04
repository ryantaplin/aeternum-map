import { mapFilters } from 'static';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { withStorageDOMEvents } from './storage';

export const allFilters = mapFilters
  .map((filter) => {
    if (filter.category === 'chests') {
      const tierTypes = Array(filter.maxTier || 5)
        .fill(null)
        .map((_, index) => `${filter.type}-${index + 1}`);
      return tierTypes;
    }
    if (filter.sizes) {
      return filter.sizes.map((size) => `${filter.type}-${size}`);
    }
    return filter.type;
  })
  .flat();

export function getOverwolfFilters() {
  return mapFilters
    .filter((filter) => ['service', 'locations'].includes(filter.category))
    .map((filter) => filter.type)
    .flat();
}

type Store = {
  filters: string[];
  setFilters: (value: string[]) => void;
};

export const useFiltersStore = create(
  persist<Store>(
    (set) => ({
      filters: [],
      setFilters: (filters) => set({ filters }),
    }),
    {
      name: 'filters-store',
    }
  )
);

withStorageDOMEvents(useFiltersStore);
