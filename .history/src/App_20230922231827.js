import { QueryClient, QueryClientProvider } from 'react-query';
import '@/styles/App.css';
import AppRouter from '@/routes/AppRouter';
import { ErrorBoundary } from 'react-error-boundary';
import FallbackComponent from '@/utils/ErrorBoundary/FallbackComponent';

function App() {
  const queryClient = new QueryClient();
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // reset the state of your app here
      }}
      resetKeys={['someKey']},
      onError={(error, info)=>{console.log("Caught an error: ", error, info)}}
    >
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
