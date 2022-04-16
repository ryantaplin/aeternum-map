import Checkbox from './Checkbox';
import FilterSelection from './FilterSelection';
import type { MapFiltersCategory } from './mapFilters';
import styles from './MarkerSection.module.css';
import { searchMapFilter } from './searchMapFilter';

type MarkerSectionProps = {
  mapFilterCategory: MapFiltersCategory;
  filters: string[];
  search: string;
  onToggle: (filterTypes: string[], checked: boolean) => void;
};

function MarkerSection({
  mapFilterCategory,
  filters,
  search,
  onToggle,
}: MarkerSectionProps): JSX.Element {
  const categories = search
    ? mapFilterCategory.filters.filter(searchMapFilter(search))
    : mapFilterCategory.filters;
  if (categories.length === 0) {
    return <> </>;
  }

  return (
    <section key={mapFilterCategory.value} className={styles.container}>
      <Checkbox
        onChange={(checked) =>
          onToggle(
            categories
              .map((filter) => {
                if (filter.category === 'chests') {
                  const tierTypes = Array(filter.maxTier || 5)
                    .fill(null)
                    .map((_, index) => `${filter.type}-${index + 1}`);
                  return tierTypes;
                }
                return filter.type;
              })
              .flat(),
            checked
          )
        }
        checked={filters.some((filter) =>
          mapFilterCategory.value === 'chests'
            ? categories.some((categoryFilter) =>
                filter.startsWith(categoryFilter.type)
              )
            : categories.some(
                (categoryFilter) => categoryFilter.type === filter
              )
        )}
        title={mapFilterCategory.title}
        className={styles.category}
      />
      <div className={styles.items}>
        {categories.map((filter) => (
          <FilterSelection
            key={filter.type}
            filter={filter}
            filters={filters}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}

export default MarkerSection;
