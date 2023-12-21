import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nested from "./nested/nested";
import Apollo from "./apollo/apollo";
import { Route as RouteTest } from "./remote";

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
            <Link to="/route">Route Sharing</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Nested />} />
          <Route path="/apollo" element={<Apollo />} />
          <Route
            path="/route"
            element={
              <div>
                <RouteTest />
              </div>
            }
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
