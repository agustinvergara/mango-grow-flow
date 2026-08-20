import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Impact } from "@/components/landing/Impact";
import { FinalCta } from "@/components/landing/FinalCta";

const title = "Mango App | Del productor a tu negocio, sin intermediarios";
const description =
  "Marketplace B2B y red logística colaborativa en Panamá que conecta productores con comercios: más margen para quien produce, mejores precios para quien compra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Impact />
      </main>
      <FinalCta />
    </div>
  );
}
