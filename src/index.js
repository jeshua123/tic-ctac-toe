import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,

  document.getElementById("root")
);
