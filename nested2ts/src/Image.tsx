import React from "react";

const Image: React.FC = () => {
  return (
    <div
      style={{
        width: "500px",
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #4169e1",
      }}
    >
      <h2>Nested Component: Image</h2>
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => alert("Client side Javascript works!")}
      >
        Click me to test i'm interactive!
      </button>
      <img
        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
        style={{ width: "100%" }}
        alt="serge"
      />
    </div>
  );
};

export default Image;
