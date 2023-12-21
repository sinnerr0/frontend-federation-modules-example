import { useEffect, useState, lazy } from "react";

export function NestedComponent(props) {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("nested1/Content")));
    }
  }, []);
  return <>{Component && <Component {...props} />}</>;
}

export function PokemonList(props) {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("apollo/PokemonList")));
    }
  }, []);
  return <>{Component && <Component {...props} />}</>;
}
