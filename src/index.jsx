import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n/i18n.js";

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById("root"),
);
