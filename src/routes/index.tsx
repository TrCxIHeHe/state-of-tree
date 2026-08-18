import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/language";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Roots } from "@/components/site/Roots";
import { About } from "@/components/site/About";
import { Governance } from "@/components/site/Governance";
import { Mission } from "@/components/site/Mission";
import { FocusAreas } from "@/components/site/FocusAreas";
import { Lens } from "@/components/site/Lens";
import { Objectives } from "@/components/site/Objectives";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkaro Rakshathi Kendra (R.) — A Watchdog of Government" },
      {
        name: "description",
        content:
          "A nation is like a tree and governance is its root. Sarkaro Rakshathi Kendra (R.) works for more professionalism in government administration. Regn. No. DRB4/SOR/136/2021-2022.",
      },
      { property: "og:title", content: "Sarkaro Rakshathi Kendra (R.) — A Watchdog of Government" },
      {
        property: "og:description",
        content:
          "Governance is beyond Nation & Democracy. A nation is like a tree and governance is its root — the philosophy of Sarkaro Rakshathi Kendra, Bengaluru.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Roots />
        <About />
        <Governance />
        <Mission />
        <FocusAreas />
        <Lens />
        <Objectives />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
