import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { createApolloClient } from "../apollo/apolloClient";
import { ApolloProvider } from "@apollo/client";
import ErrorBoundary from "@/components/common/error-boundary";
import ErrorPage from "@/components/common/error-page";
import { ThemeProvider } from "@emotion/react";
import Theme from "@/components/theme";
import GlobalStyle from "@/components/global.style";
import { useRouter } from "next/router";

const { apolloClient, apolloCache } = createApolloClient({ ssrMode: true });

function initializeApolloClient(pageProps: any) {
  const initialState = pageProps?.["__APOLLO_STATE__"];
  if (typeof window !== "undefined" && initialState) {
    apolloCache.restore(initialState);
  }
}

const ssrWhiteList = [/^\/ssr$/];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
    initializeApolloClient(pageProps);
  }, [pageProps]);

  if (ssrWhiteList.some((pattern) => pattern.test(router.pathname))) {
    return render(Component, pageProps);
  } else {
    if (isServer) return null;
    return (
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : render(Component, pageProps)}
      </div>
    );
  }
}

function render(
  Component: AppProps["Component"],
  pageProps: AppProps["pageProps"]
) {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <ThemeProvider theme={Theme}>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
