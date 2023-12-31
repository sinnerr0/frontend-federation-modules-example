import { lazy } from "react";
// @mf-types directory is autogenerated when you start the server
import ImageType from "@mf-types/nested2ts/Image";

export const Image = lazy(
  // @ts-expect-error federated module.
  () => import("nested2ts/Image")
) as unknown as typeof ImageType;
