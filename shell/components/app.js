import Button from "./Button";
import { useEffect, useState, lazy } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { NestedComponent } from "./remote";

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  const [state, setState] = useState("");
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <h3>Chagne Remote State Test</h3>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Luke, I am your father..."
        />
      </div>
      <NestedComponent content={state} />
    </>
  );
}

function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/topics">
        <Button text="Topics" />
      </Link>
    </>
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
