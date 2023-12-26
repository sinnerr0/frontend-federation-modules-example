import { useEffect, useState } from "react";
import { createApolloClient } from "../apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";

const { apolloClient, apolloCache } = createApolloClient({ ssrMode: true });

function initializeApolloClient(pageProps) {
  const initialState = pageProps?.["__APOLLO_STATE__"];
  if (typeof window !== "undefined" && initialState) {
    apolloCache.restore(initialState);
  }
}

function App({ Component, pageProps }) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
    initializeApolloClient(pageProps);
  }, [pageProps]);

  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      )}
    </div>
  );
}
export default App;
