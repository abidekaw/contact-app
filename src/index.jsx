/* eslint-disable no-unused-vars */
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
