import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function QueryProvider({ children }: PropsWithChildren) {
  const queryClinet = new QueryClient();

  return <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>;
}

export default QueryProvider;
