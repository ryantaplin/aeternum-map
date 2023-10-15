import type { SelectItem } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import { useState } from 'react';
import { fetchJSON } from '../../utils/api';
import { useRouteSearchStore } from './routeSearchStore';

const groups: {
  [group: string]: string;
} = {
  'Route is': 'is:',
  'Route in region': 'region:',
  'Route author': 'author:',
};
const options = Object.values(groups);

const defaultData: SelectItem[] = [
  { value: 'is:', label: 'is: ...', group: 'Search Options' },
  // { value: 'is: archived', label: 'is: Archived', group: 'Route is' }, //TODO: RYAN - update server with this info & come back to it later
  { value: 'is: favorite', label: 'is: Favorite', group: 'Route is' },

  { value: 'region:', label: 'region: ...', group: 'Search Options' },
  { value: 'author:', label: 'author: ...', group: 'Search Options' },
];

function RouteSearch() {
  const {
    searchValues,
    onChange,
    refreshRouteIds: refreshRouteIds,
  } = useRouteSearchStore();
  const [searchValue, onSearchChange] = useState('');
  const [data, setData] = useState<SelectItem[]>(defaultData);
  const [loaded, setLoaded] = useState(false);

  const handleFocus = () => {
    if (loaded) {
      return;
    }
    setLoaded(true);
    fetchJSON<{
      users: string[];
      regions: string[];
    }>('/api/search/route')
      .then((result) => {
        setData((current) => [
          ...current,
          ...result.users.map((item) => ({
            value: `author: ${item}`,
            label: `author: ${item}`,
            group: 'Route author',
          })),
          ...result.regions.map((item) => ({
            value: `region: ${item}`,
            label: `region: ${item}`,
            group: 'Route in region',
          })),
        ]);
      })
      .catch(console.error);
  };

  return (
    <MultiSelect
      placeholder="Search"
      maxDropdownHeight={260}
      searchable
      searchValue={searchValue}
      limit={10}
      onSearchChange={onSearchChange}
      onFocus={handleFocus}
      data={data}
      value={searchValues}
      onChange={(searchValues) => {
        if (options.some((option) => searchValues.includes(option))) {
          onSearchChange(`${searchValues.at(-1)!} `);
        } else {
          onChange(searchValues);
          refreshRouteIds();
        }
      }}
      filter={(value, _selected, item) => {
        const lowerCaseValue = value.toLowerCase();
        if (item.group === 'Search Options') {
          return (
            item.value.startsWith(lowerCaseValue) &&
            item.value !== lowerCaseValue
          );
        }
        const option = groups[item.group!];
        return (
          lowerCaseValue.startsWith(option) &&
          item.label!.toLowerCase().includes(lowerCaseValue.trim())
        );
      }}
    />
  );
}

export default RouteSearch;
