import Route from "./Route";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Route />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
