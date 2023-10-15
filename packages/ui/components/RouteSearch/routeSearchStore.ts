import { create } from 'zustand';

type Store = {
  routeFilters: string[];
  searchValues: string[];
  onChange: (values: string[]) => void;
  refreshRouteIds: () => void;
};

export const useRouteSearchStore = create<Store>((set, get) => ({
  routeFilters: [],
  searchValues: [],
  onChange: (searchValues) => set({ searchValues }),
  refreshRouteIds: async () => {
    const { searchValues, routeFilters: routeFilters } = get();
    const newRouteFilters = [...routeFilters].filter((routeFilter) =>
      searchValues.includes(routeFilter)
    );
    for (const from of searchValues) {
      const routeFilter = newRouteFilters.find((context) => context === from);
      if (!routeFilter) {
        newRouteFilters.push(from);
      }
    }
    set({ routeFilters: newRouteFilters });
  },
}));
