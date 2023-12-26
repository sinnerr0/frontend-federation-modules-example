import React from "react";
import PokemonList from "./PokemonList";

const App = () => {
  const [limit, setLimit] = React.useState(10);
  const [offset, setOffset] = React.useState(0);

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #fc451e",
      }}
    >
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
    </div>
  );
};

export default App;
