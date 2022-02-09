import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NameProvider } from "./context/NameContext";

ReactDOM.render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
