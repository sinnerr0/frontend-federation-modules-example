import { styled } from "@stitches/react";
import React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

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

const StyledButton = styled("button", {
  background: "#4b4be8",
  color: "#fff",
  padding: 12,
});

const Button = (props) => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { limit: 10, offset: 0 },
    fetchPolicy: "cache-first",
  });

  if (loading) return <span>loading...</span>;
  if (error) return <span>Error! {error.message}</span>;

  return (
    <Link to="/">
      <StyledButton>Remote Button navigate "/"</StyledButton>
    </Link>
  );
};

export default Button;
