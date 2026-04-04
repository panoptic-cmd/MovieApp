import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar.tsx"
import DetailsPage  from "./pages/Details/Details.tsx"
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
<NavBar/>
      <Routes>
         <Route path="/" element={<App />} />
         <Route path="/details/:type/:id" element={<DetailsPage />} />
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
);
