import AppTheme from './AppTheme.tsx';
import { AppRouter } from './AppRouter.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AppTheme>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </AppTheme>
    </>
  );
}

export default App;
