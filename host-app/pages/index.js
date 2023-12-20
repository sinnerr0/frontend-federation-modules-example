import Button from "../components/Button";
import { useEffect, useState, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { createApolloClient } from "../apollo/apolloClient";

import { gql } from "@apollo/client";

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
      variables: { limit: 10, offset: 0 },
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

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Next.JS</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function RemoteButton() {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("remote/Button")));
    }
  }, []);
  return <>{Component && <Component />}</>;
}

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <Button
        text="About"
        onClick={() => {
          navigate("/about");
        }}
      />
      <RemoteButton />
    </>
  );
}

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>About</h1>
      <Button
        text="Topics"
        onClick={() => {
          navigate("/topics");
        }}
      />
      <RemoteButton />
    </>
  );
}

function Topics() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Topics</h1>
      <Button
        text="Home"
        onClick={() => {
          navigate("/");
        }}
      />
      <RemoteButton />
    </>
  );
}
