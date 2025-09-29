import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Update the import path and extension if needed
import { PadminiNeworder } from "./components/screens/PadminNeworder/PadminNeworder";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PadminiNeworder />
  </StrictMode>,
);


