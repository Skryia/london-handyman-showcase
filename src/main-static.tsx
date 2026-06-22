import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SiteIndex from "@/components/SiteIndex";
import "./styles.css";

// Inject JSON-LD structured data
const ld = document.createElement("script");
ld.type = "application/ld+json";
ld.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "London Handyman Services",
  areaServed: "London, United Kingdom",
  priceRange: "££",
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  sameAs: ["https://www.facebook.com/profile.php?id=61578172167809"],
});
document.head.appendChild(ld);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SiteIndex />
  </StrictMode>,
);
