import { Reveal } from "./motion";

const nav = ["Home", "About", "Products", "Services", "Portfolio", "Team", "Contact"];
const services = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "AI & Digital Marketing",
  "DevOps & Cloud Services",
  "24/7 Support",
];
const socials = ["LinkedIn", "X", "Facebook", "Instagram"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <Reveal>
            <a href="#home" className="flex items-center gap-2.5">
              <img
                src={logoUrl}
                alt="Mapsoft Technologies LLP"
                width={180}
                height={44}
                loading="lazy"
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Mapsoft Technologies LLP builds custom software, ERP, mobile applications and digital
              solutions that help businesses simplify operations and grow.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <span
                  key={s}
                  className="cursor-default rounded-lg border border-border bg-background px-3 py-1.5 text-[11px] font-semibold text-muted-foreground transition-colors duration-300 hover:border-brand hover:text-brand"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Navigation</h3>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n}>
                  <a
                    href={`#${n.toLowerCase()}`}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-brand"
                  >
                    {n}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.14}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-brand"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Kharadi, Pune - 411014, India</li>
              <li>
                <a href="tel:+918484960350" className="hover:text-brand">
                  +91 8484960350
                </a>
              </li>
              <li>Dallas, Texas 75244, USA</li>
              <li>
                <a href="tel:+18634413020" className="hover:text-brand">
                  +1 (863)-441-3020
                </a>
              </li>
              <li>
                <a href="mailto:info@maptechsoft.com" className="hover:text-brand">
                  info@maptechsoft.com
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © 2025 Mapsoft Technologies LLP. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">Redesign concept · Single-page demo</p>
        </div>
      </div>
    </footer>
  );
}
