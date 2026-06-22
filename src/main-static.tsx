import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SiteIndex from "@/components/SiteIndex";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteIndex />
  </StrictMode>,
);
