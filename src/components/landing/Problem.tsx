import { Route, TrendingDown, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const problems = [
  {
    icon: TrendingDown,
    title: "El Productor pierde",
    text: "Asumen todo el riesgo del cultivo —clima, plagas, cosecha— y terminan vendiendo con márgenes mínimos que apenas cubren costos.",
  },
  {
    icon: Users,
    title: "Los Intermediarios inflan precios",
    text: "Un producto que sale del campo a $0.25 termina costando $2.50 en la tienda final. El valor se queda en el camino.",
  },
  {
    icon: Route,
    title: "Logística fragmentada",
    text: "Falta de tecnología para optimizar rutas, consolidar carga y coordinar transporte. Camiones viajando medio vacíos.",
  },
];

export function Problem() {
  return (
    <section id="problema" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mango">
            Por qué existimos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">El Problema</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            La cadena agroalimentaria panameña está rota en tres puntos críticos. Cada eslabón extra
            resta al productor y encarece al comercio.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 110}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/35 hover:shadow-lift">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-leaf transition-colors duration-300 group-hover:bg-mango/15 group-hover:text-mango-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
