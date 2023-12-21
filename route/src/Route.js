import React from "react";
import { Link } from "react-router-dom";

export default function Route() {
  return (
    <div
      style={{
        width: "500px",
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #4169e1",
      }}
    >
      <h1>Remote Route Sharing Test</h1>
      <Link to="/">
        <button>Nested Remote: "/"</button>
      </Link>
      <Link to="/apollo">
        <button>Apollo Cache Sharing "/apollo"</button>
      </Link>
    </div>
  );
}
