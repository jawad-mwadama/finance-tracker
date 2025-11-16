import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <div className="bg-stone-100 font-Inter text-stone-950">
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
    ,
  </div>,
);
