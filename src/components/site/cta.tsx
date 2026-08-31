import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Cloud, Cpu, Database, LineChart } from "lucide-react";
import { EASE, Floating, Magnetic, Reveal } from "./motion";

const orbits = [
  { icon: Cloud, pos: "top-8 left-6 sm:left-16" },
  { icon: Database, pos: "top-14 right-8 sm:right-24" },
  { icon: LineChart, pos: "bottom-12 left-10 sm:left-28" },
  { icon: Cpu, pos: "bottom-8 right-6 sm:right-16" },
];

export function Cta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="brand-glow-orb pointer-events-none absolute top-1/2 left-1/2 size-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,black,transparent)]" />

      {orbits.map((o, i) => (
        <Floating
          key={i}
          className={`absolute ${o.pos} hidden sm:block`}
          amplitude={16}
          duration={7 + i}
          delay={i * 0.5}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: EASE }}
            className="surface-card grid size-14 place-items-center"
          >
            <o.icon className="size-5 text-brand" />
          </motion.div>
        </Floating>
      ))}

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-4xl leading-[1.05] font-extrabold text-balance-tight sm:text-6xl lg:text-7xl">
            Let&apos;s Build <span className="text-brand">What&apos;s Next.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have an idea, a business challenge, or a digital product in mind? Let&apos;s turn it
            into a scalable technology solution.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_50px_-18px_var(--brand)] transition-shadow duration-500 hover:shadow-[0_30px_70px_-18px_var(--brand)]"
              >
                Start a Conversation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Explore Solutions
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
