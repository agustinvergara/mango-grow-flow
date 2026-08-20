import { useState, type FormEvent } from "react";
import { Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { MangoLogo } from "./MangoLogo";
import { Reveal } from "./Reveal";

export function FinalCta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer id="waitlist" className="bg-gradient-soft pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand px-7 py-14 text-center shadow-lift sm:px-12">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
              ¿Listo para transformar el mercado con Mango App?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              Sé de los primeros productores, comercios o transportistas en entrar a la red.
            </p>

            <form
              onSubmit={onSubmit}
              className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@empresa.com"
                className="min-w-0 flex-1 rounded-full border border-transparent bg-card px-5 py-3.5 text-sm text-foreground outline-none transition-shadow duration-300 placeholder:text-muted-foreground focus:ring-4 focus:ring-card/40"
              />
              <button
                type="submit"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                Notificarme el lanzamiento
                <Send className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            {sent ? (
              <p className="mt-4 text-sm font-semibold text-primary-foreground">
                ¡Listo! Te avisamos apenas abramos el acceso.
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-border py-8 sm:flex sm:justify-between">
          <div className="flex min-w-0 items-center gap-2.5">
            <MangoLogo className="h-8 w-8 shrink-0" />
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">Mango App</p>
              <p className="truncate text-xs text-muted-foreground">Agrotech &amp; Logística B2B</p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Twitter, label: "X" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#waitlist"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-leaf"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="col-span-2 text-xs text-muted-foreground sm:col-auto">
            © {new Date().getFullYear()} Mango App. Panamá. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
