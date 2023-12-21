import { useState } from "react";
import { PokemonList } from "../remote";

export default function Apollo() {
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);

  return (
    <>
      <h1>Apollo Cache Sharing Test</h1>
      <div style={{ padding: "1rem" }}>
        <h2>Change the request params</h2>

        <label htmlFor="limit">Limit {limit}</label>
        <input
          id="limit"
          name="limit"
          type="range"
          min="1"
          max="100"
          defaultValue={limit}
          onMouseUp={(e) => setLimit(e.currentTarget.valueAsNumber)}
          onTouchEnd={(e) => setLimit(e.currentTarget.valueAsNumber)}
        />

        <label htmlFor="offset">Offset {offset}</label>
        <input
          id="offset"
          name="offset"
          type="range"
          min="1"
          max="100"
          defaultValue={offset}
          onMouseUp={(e) => setOffset(e.currentTarget.valueAsNumber)}
          onTouchEnd={(e) => setOffset(e.currentTarget.valueAsNumber)}
        />
      </div>

      <div style={{ padding: "1rem" }}>
        <PokemonList limit={limit} offset={offset} />
      </div>
    </>
  );
}
