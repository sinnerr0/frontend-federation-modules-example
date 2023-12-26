import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { createApolloClient } from "../apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";
import ErrorBoundary from "@/components/common/error-boundary";
import ErrorPage from "@/components/common/error-page";

const { apolloClient, apolloCache } = createApolloClient({ ssrMode: true });

function initializeApolloClient(pageProps: any) {
  const initialState = pageProps?.["__APOLLO_STATE__"];
  if (typeof window !== "undefined" && initialState) {
    apolloCache.restore(initialState);
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
    initializeApolloClient(pageProps);
  }, [pageProps]);

  if (isServer) return null;

  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <ErrorBoundary fallback={<ErrorPage />}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ErrorBoundary>
      )}
    </div>
  );
}