import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DescriptionPage from "./DescriptionPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/movies/:id" Component={DescriptionPage} />
    </Routes>
  </BrowserRouter>
);
