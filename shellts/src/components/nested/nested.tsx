import { useState } from "react";
import { RContent } from "../remote";

export default function Nested() {
  const [state, setState] = useState("");
  return (
    <>
      <h1>Change Remote State Test</h1>
      <div style={{ padding: "1rem" }}>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Luke, I am your father..."
        />
      </div>
      <RContent content={state} />
    </>
  );
}
