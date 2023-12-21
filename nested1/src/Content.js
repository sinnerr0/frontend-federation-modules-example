import React, { Suspense, lazy } from "react";

const Image = lazy(() => import("nested2/Image"));

const Content = ({ content }) => {
  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #228b22",
      }}
    >
      <h2>Nested Component: Content</h2>
      <p>Text From Shell: {content || ""}</p>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Image />
      </Suspense>
    </div>
  );
};

export default Content;
