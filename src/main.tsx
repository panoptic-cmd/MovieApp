import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import DetailsPage  from "./pages/Details/Details.tsx"
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/details/:type/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
