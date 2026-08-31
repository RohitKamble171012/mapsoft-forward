import { motion } from "motion/react";
import { Section, SectionHeading } from "./section";
import { EASE, Floating } from "./motion";
import { techLogos } from "@/lib/site-images";

const positions = [
  { x: "12%", y: "18%", d: 0 },
  { x: "42%", y: "6%", d: 0.4 },
  { x: "74%", y: "16%", d: 0.8 },
  { x: "88%", y: "48%", d: 1.2 },
  { x: "62%", y: "62%", d: 0.6 },
  { x: "30%", y: "70%", d: 1 },
  { x: "6%", y: "56%", d: 1.4 },
  { x: "48%", y: "36%", d: 0.2 },
];

const tech = positions.map((p, i) => ({ ...p, ...techLogos[i]! }));
const extraTech = techLogos.slice(positions.length);

export function TechnologyStack() {
  return (
    <Section id="technology">
      <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Technology"
          title={
            <>
              A Stack Chosen for <span className="text-brand">Longevity.</span>
            </>
          }
          description="We build on proven, well-supported technologies so the software we deliver stays maintainable for years."
        />

        <div className="relative h-[420px] w-full sm:h-[460px]">
          <div className="brand-glow-orb pointer-events-none absolute inset-12 rounded-full opacity-50" />
          <svg className="absolute inset-0 size-full" aria-hidden>
            {tech.slice(0, 7).map((t, i) => (
              <motion.line
                key={t.name}
                x1="50%"
                y1="42%"
                x2={t.x}
                y2={t.y}
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: EASE }}
              />
            ))}
          </svg>

          {tech.map((t, i) => (
            <div
              key={t.name}
              className="absolute"
              style={{ left: t.x, top: t.y, transform: "translate(-50%,-50%)" }}
            >
              <Floating amplitude={12} duration={6 + (i % 4)} delay={t.d}>

              <motion.div
                style={{ position: "relative" }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.08, ease: EASE }}
                whileHover={{ scale: 1.12 }}
                className="group"
              >
                <div className="surface-card grid size-[76px] place-items-center p-3 transition-all duration-500 group-hover:border-brand group-hover:shadow-[0_20px_44px_-20px_var(--brand)]">
                  <img
                    src={t.src}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-11 w-auto max-w-full object-contain opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-lg bg-foreground px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t.name}
                </span>
              </motion.div>
              </Floating>
            </div>
          ))}


          <div
            className="pointer-events-none absolute"
            style={{ left: "50%", top: "42%", transform: "translate(-50%,-50%)" }}
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="grid size-20 place-items-center rounded-3xl bg-brand text-primary-foreground shadow-[0_24px_60px_-20px_var(--brand)]"
            >
              <span className="text-xl font-extrabold">M</span>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
