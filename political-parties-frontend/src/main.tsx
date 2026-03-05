import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PolitcalApp from "./PoliticalApp.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PolitcalApp />
  </StrictMode>,
);
