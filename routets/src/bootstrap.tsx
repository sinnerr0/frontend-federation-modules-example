import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";

const App = () => (
  <BrowserRouter>
    <Route />
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
