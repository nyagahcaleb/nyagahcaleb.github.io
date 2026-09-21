import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Force every page load to start at the top instead of restoring
// the browser's last scroll position.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const scrollTop = () => window.scrollTo(0, 0);

scrollTop();
window.addEventListener("load", scrollTop);
window.addEventListener("pageshow", scrollTop);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
