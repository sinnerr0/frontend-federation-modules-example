import { useEffect, useState, lazy } from "react";
import PokemonList, { PokemonListProps } from "@mf-types/apollots/PokemonList";
import Content, { ContentProps } from "@mf-types/nested1ts/Content";
import RemoteRoute from "@mf-types/routets/Route";
import ErrorBoundary from "./common/error-boundary";
import { timeout } from "promise-timeout";

const REMOTE_COMPONENTS_FACTORY = {
  "nested1ts/Content": () => {
    if (typeof window !== "undefined")
      return lazy(() =>
        // @ts-expect-error federated module.
        timeout(import("nested1ts/Content"), 2000)
      );
  },
  "apollots/PokemonList": () => {
    if (typeof window !== "undefined")
      return lazy(() =>
        // @ts-expect-error federated module.
        timeout(import("apollots/PokemonList"), 2000)
      );
  },
  "routets/Route": () => {
    if (typeof window !== "undefined")
      return lazy(() =>
        // @ts-expect-error federated module.
        timeout(import("routets/Route"), 2000)
      );
  },
};

function Loading() {
  return <div>loading...</div>;
}

export function useGetComponent<T>(
  name: keyof typeof REMOTE_COMPONENTS_FACTORY
) {
  const [Component, setComponent] = useState<T>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(REMOTE_COMPONENTS_FACTORY[name]() as T);
    }
  }, []);

  if (!Component) return Loading;
  return Component;
}

export function RContent(props: ContentProps) {
  const Component = useGetComponent<typeof Content>("nested1ts/Content");
  return (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
}
export function RPokemonList(props: PokemonListProps) {
  const Component = useGetComponent<typeof PokemonList>("apollots/PokemonList");
  return (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
}
export function RRoute() {
  const Component = useGetComponent<typeof RemoteRoute>("routets/Route");
  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
}
