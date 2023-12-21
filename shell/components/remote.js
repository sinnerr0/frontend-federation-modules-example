import { useEffect, useState, lazy } from "react";

export function NestedComponent({ content }) {
  const [Component, setComponent] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(lazy(() => import("nested1/Content")));
    }
  }, []);
  return <>{Component && <Component content={content} />}</>;
}
