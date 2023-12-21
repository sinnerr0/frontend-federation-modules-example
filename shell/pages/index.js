import { createApolloClient } from "../apollo/apolloClient";

import { gql } from "@apollo/client";
import App from "../components/app";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const getServerSideProps = async () => {
  try {
    const { apolloClient } = createApolloClient();
    await apolloClient.query({
      query: GET_POKEMONS,
      variables: { limit: 5, offset: 0 },
    });
    return {
      props: {
        __APOLLO_STATE__: apolloClient.cache.extract(),
      },
    };
  } catch (e) {
    console.error(JSON.stringify(e, null, 2));
  }
  return { props: {} };
};

export default function Index() {
  return <App />;
}
