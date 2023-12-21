import Button from "./common/button";
import { useEffect, useState, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Nested from "./nested/nested";
import Apollo from "./apollo/apollo";

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          padding: "1rem",
          borderRadius: "0.25rem",
          border: "4px dashed #fc451e",
        }}
      >
        <h1>Module Federation Example: Next.JS App Shell</h1>
        <ul>
          <li>
            <Link to="/">Nested Remote</Link>
          </li>
          <li>
            <Link to="/apollo">Apollo Cache Sharing</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Nested />} />
          <Route path="/apollo" element={<Apollo />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Topics() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Topics</h1>
      <Link to="/topics">
        <Button text="Home" />
      </Link>
    </>
  );
}
