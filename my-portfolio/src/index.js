import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ThemeProvider } from "./contexts/useTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (!root) throw new Error("Root element not found");

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
