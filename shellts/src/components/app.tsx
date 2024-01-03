import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nested from "./nested/nested";
import Apollo from "./apollo/apollo";
import { RRoute } from "./remote";
import { Li } from "./app.style";

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
          <Li>
            <Link to="/">Nested Remote</Link>
          </Li>
          <Li>
            <Link to="/apollo">Apollo Cache Sharing</Link>
          </Li>
          <Li>
            <Link to="/route">Route Sharing</Link>
          </Li>
          <Li>
            <a href="/ssr">SSR Page</a>
          </Li>
        </ul>

        <Routes>
          <Route path="/" element={<Nested />} />
          <Route path="/apollo" element={<Apollo />} />
          <Route
            path="/route"
            element={
              <div>
                <RRoute />
              </div>
            }
          />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
