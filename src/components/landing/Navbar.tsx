import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MangoLogo } from "./MangoLogo";

const links = [
  { href: "#problema", label: "El Problema" },
  { href: "#solucion", label: "Solución" },
  { href: "#logistica", label: "Logística" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft" : ""
      }`}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between">
        <a href="#inicio" className="flex min-w-0 items-center gap-2.5">
          <MangoLogo className="h-9 w-9 shrink-0 transition-transform duration-300 hover:rotate-6" />
          <span className="truncate text-lg font-extrabold tracking-tight">Mango App</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Únete a la lista de espera
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="justify-self-end rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background px-5 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-brand px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Únete a la lista de espera
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
