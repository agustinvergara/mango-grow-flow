import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-supply-chain.jpg";
import { Reveal } from "./Reveal";

const stats = [
  { value: "8x", label: "Sobreprecio actual por intermediación" },
  { value: "+220%", label: "Margen potencial para el productor" },
  { value: "1 red", label: "Logística colaborativa en Panamá" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-soft pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mango/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 lg:grid-cols-2 lg:gap-8 lg:pb-28">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-leaf">
            <Sparkles className="h-3.5 w-3.5" />
            Agrotech &amp; Logística B2B · Panamá
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Mango App: Del productor a tu negocio,{" "}
            <span className="text-gradient-brand">sin intermediarios.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Revolucionamos la cadena de suministro en Panamá. Conectamos a productores locales
            directamente con comercios mediante un marketplace inteligente y una red logística
            integrada. Más ganancias para el que produce, mejores precios para el que compra.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Registrar mi negocio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#solucion"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
            >
              <PlayCircle className="h-4 w-4 text-primary" />
              Ver Demo
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="text-2xl font-extrabold text-leaf">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="absolute inset-4 rounded-[2rem] bg-gradient-brand opacity-15 blur-2xl" />
          <img
            src={heroImage}
            alt="Un productor entrega una caja de frutas directamente al dueño de un comercio, saltando los intermediarios"
            width={1280}
            height={960}
            className="relative w-full rounded-[1.75rem] border border-border bg-card object-cover shadow-lift"
          />
        </Reveal>
      </div>
    </section>
  );
}
