import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import App from "./components/App";
import { createApolloClient } from "./apolloClient";

const { apolloClient, apolloCache } = createApolloClient();

if (typeof window !== "undefined" && window["__APOLLO_STATE__"]) {
  const { apolloData } = window["__APOLLO_STATE__"];
  apolloCache.restore(apolloData);
}

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
