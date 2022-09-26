import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StudentProvider } from "./contexts/StudentContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StudentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StudentProvider>
  </React.StrictMode>
);
