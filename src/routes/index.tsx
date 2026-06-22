import { createFileRoute } from "@tanstack/react-router";
import SiteIndex from "@/components/SiteIndex";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "London Handyman Services — Trusted Property Repairs Across London" },
      { name: "description", content: "Reliable, insured handyman services across London. Painting, carpentry, plumbing, electrical, repairs and assembly — done right, first time." },
      { property: "og:title", content: "London Handyman Services" },
      { property: "og:description", content: "Reliable, insured handyman services across London. Quality workmanship, friendly service, quick response." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "London Handyman Services",
          areaServed: "London, United Kingdom",
          telephone: "",
          priceRange: "££",
          address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
          sameAs: ["https://www.facebook.com/profile.php?id=61578172167809"],
        }),
      },
    ],
  }),
  component: SiteIndex,
});
