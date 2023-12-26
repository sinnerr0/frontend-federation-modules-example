import { useEffect, useState, lazy } from "react";
import PokemonList, { PokemonListProps } from "@mf-types/apollots/PokemonList";
import Content, { ContentProps } from "@mf-types/nested1ts/Content";
import RemoteRoute from "@mf-types/routets/Route";

export function Loading() {
  return <div>loading...</div>;
}

export function RContent(props: ContentProps) {
  const [Component, setComponent] = useState<typeof Content>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(
        // @ts-expect-error federated module.
        lazy(() => import("nested1ts/Content")) as unknown as typeof Content
      );
    }
  }, []);
  if (!Component) return <Loading />;
  return <Component {...props} />;
}

export function RPokemonList(props: PokemonListProps) {
  const [Component, setComponent] = useState<typeof PokemonList>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-expect-error federated module.
      setComponent(lazy(() => import("apollots/PokemonList")));
    }
  }, []);
  if (!Component) return <Loading />;
  return <Component {...props} />;
}

export function RRoute() {
  const [Component, setComponent] = useState<typeof RemoteRoute>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-expect-error federated module.
      setComponent(lazy(() => import("routets/Route")));
    }
  }, []);
  if (!Component) return <Loading />;
  return <Component />;
}
