import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const before = [
  { who: "Productor", value: "$0.25" },
  { who: "Minisúper", value: "$2.00" },
];

const after = [
  { who: "Productor", value: "$0.80" },
  { who: "Minisúper", value: "$1.30" },
];

export function Impact() {
  return (
    <section id="impacto" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-lift sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mango/20 blur-3xl"
            />
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-mango">
                El Impacto · Caso de uso
              </span>
              <h2 className="mt-4 max-w-3xl text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
                Imagina una pipa (coco). Hoy el productor la vende a $0.25 al transportista y llega
                al minisúper a $2.00. Con Mango App, el productor gana{" "}
                <span className="text-gradient-brand">$0.80</span>, el minisúper paga{" "}
                <span className="text-gradient-brand">$1.30</span> y el transporte se optimiza.
                Todos ganan.
              </h2>

              <div className="mt-10 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-2xl border border-border bg-muted p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Hoy
                  </p>
                  <ul className="mt-4 space-y-3">
                    {before.map((r) => (
                      <li
                        key={r.who}
                        className="flex items-center justify-between gap-4 text-sm font-medium"
                      >
                        <span className="min-w-0 truncate text-muted-foreground">{r.who}</span>
                        <span className="shrink-0 text-lg font-extrabold">{r.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-soft">
                  <ArrowRight className="h-5 w-5" />
                </span>

                <div className="rounded-2xl border border-primary/30 bg-primary/8 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-leaf">
                    Con Mango App
                  </p>
                  <ul className="mt-4 space-y-3">
                    {after.map((r) => (
                      <li
                        key={r.who}
                        className="flex items-center justify-between gap-4 text-sm font-medium"
                      >
                        <span className="min-w-0 truncate text-muted-foreground">{r.who}</span>
                        <span className="shrink-0 text-lg font-extrabold text-leaf">{r.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
