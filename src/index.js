import React from "react";
import ReactDOM from "react-dom/client";  // Using React 18's new ReactDOM API
import App from "./App";  // Importing the root component
import "bootstrap/dist/css/bootstrap.css";  // Importing Bootstrap styles

// Rendering the App component inside the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />  {/* Rendering the root App component */}
  </React.StrictMode>
);
