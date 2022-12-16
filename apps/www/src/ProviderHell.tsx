import type { ReactNode } from 'react';
import { MarkersProvider } from 'ui/contexts/MarkersContext';
import { ThemeProvider } from 'ui/contexts/ThemeProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { broadcastQueryClient } from '@tanstack/query-broadcast-client-experimental';

const queryClient = new QueryClient();
broadcastQueryClient({
  queryClient,
  broadcastChannel: 'aeternum-map',
});

const helmetContext = {};

type Props = {
  children: ReactNode;
};
const ProviderHell = ({ children }: Props) => {
  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <MarkersProvider>{children}</MarkersProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default ProviderHell;
