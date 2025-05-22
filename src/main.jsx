import React from "react";
import {createRoot} from "react-dom/client";
import "./css/index.css";
import Portfolio from "./Portfolio"; // Tailwind CSS entry

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
 <React.StrictMode>
  <Portfolio/>
 </React.StrictMode>
);
