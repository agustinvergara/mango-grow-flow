import { Check } from "lucide-react";
import marketplaceImg from "@/assets/feature-marketplace.jpg";
import logisticsImg from "@/assets/feature-logistics.jpg";
import controlImg from "@/assets/feature-control.jpg";
import { Reveal } from "./Reveal";

const features = [
  {
    id: "solucion",
    tag: "Marketplace",
    title: "Marketplace B2B Inteligente",
    text: "Productores publican su oferta y los comercios compran directamente usando nuestro sistema de negociación y ofertas en tiempo real. Precio justo, trazable y transparente.",
    bullets: [
      "Publicación de oferta en minutos",
      "Negociación y contraofertas en vivo",
      "Historial y trazabilidad por lote",
    ],
    image: marketplaceImg,
    alt: "Mockup del marketplace B2B de Mango App con listados y negociación de precios",
  },
  {
    id: "logistica",
    tag: "Logística",
    title: "Logística Colaborativa (estilo Uber)",
    text: "Una subplataforma donde los transportistas ofrecen su espacio disponible. Mango App calcula rutas automáticamente, maneja horarios y conecta con centros de acopio.",
    bullets: [
      "Rutas y consolidación de carga automáticas",
      "Capacidad ociosa convertida en ingreso",
      "Integración con centros de acopio",
    ],
    image: logisticsImg,
    alt: "Mockup de la app de logística de Mango App con rutas optimizadas y capacidad de camiones",
  },
  {
    id: "control",
    tag: "Infraestructura",
    title: "Control Total de tu cadena",
    text: "No es solo compra y venta: te damos la infraestructura tecnológica para armar y gestionar tu propia cadena de producción a la medida, con datos en tiempo real.",
    bullets: [
      "Diseña tu cadena nodo por nodo",
      "Métricas de costo, tiempo y cumplimiento",
      "Escala sin cambiar de sistema",
    ],
    image: controlImg,
    alt: "Mockup del constructor de cadena de suministro de Mango App con nodos y métricas",
  },
];

export function Solution() {
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mango">
            El ecosistema Mango App
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">La Solución</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Tres piezas que funcionan como una sola plataforma: comercio, movimiento y control.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 sm:gap-24">
          {features.map((f, i) => (
            <Reveal
              key={f.id}
              as="article"
              className="scroll-mt-24"
            >
              <div id={f.id} className="grid items-center gap-10 lg:grid-cols-2">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-leaf">
                    {f.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.text}</p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm font-medium">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-leaf">
                          <Check className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={f.image}
                    alt={f.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full rounded-2xl border border-border bg-card object-cover shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
