import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="bg-stone-100 font-Inter text-stone-950">
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </div>,
);
