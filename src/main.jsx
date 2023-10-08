import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Default } from "./Components/default.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Default/> */}
  </React.StrictMode>
);
