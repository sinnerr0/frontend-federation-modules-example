import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { createApolloClient } from "../apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";
import ErrorBoundary from "@/components/common/error-boundary";
import ErrorPage from "@/components/common/error-page";
import { ThemeProvider, type DefaultTheme } from "styled-components";
import GlobalStyle from "@/components/global.style";

const { apolloClient, apolloCache } = createApolloClient({ ssrMode: true });

function initializeApolloClient(pageProps: any) {
  const initialState = pageProps?.["__APOLLO_STATE__"];
  if (typeof window !== "undefined" && initialState) {
    apolloCache.restore(initialState);
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

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
          <ThemeProvider theme={theme}>
            <ApolloProvider client={apolloClient}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ApolloProvider>
          </ThemeProvider>
        </ErrorBoundary>
      )}
    </div>
  );
}
