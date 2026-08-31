import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE } from "./motion";

/**
 * The current maptechsoft.com testimonial block uses generic demo content.
 * These slots are intentionally marked as placeholders rather than presenting
 * invented client quotes as genuine.
 */
const slides = [
  {
    quote:
      "Placeholder testimonial slot — real client quotes will be collected and published here.",
    name: "Client name pending",
    role: "Role / Company",
    initials: "01",
  },
  {
    quote:
      "Placeholder testimonial slot — this layout is ready for verified feedback from Mapsoft clients.",
    name: "Client name pending",
    role: "Role / Company",
    initials: "02",
  },
  {
    quote:
      "Placeholder testimonial slot — no client statements are fabricated in this redesign concept.",
    name: "Client name pending",
    role: "Role / Company",
    initials: "03",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const s = slides[i]!;

  const go = (d: number) => {
    setDir(d);
    setI((v) => (v + d + slides.length) % slides.length);
  };

  return (
    <Section id="testimonials" tone="surface">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            Client Voices, <span className="text-brand">Coming Soon.</span>
          </>
        }
        description="Placeholder content — this section is reserved for verified client testimonials."
      />

      <div className="relative mt-12 overflow-hidden">
        <div className="surface-card relative min-h-[300px] p-8 sm:p-12">
          <Quote className="size-9 text-brand" />
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <p className="mt-6 max-w-3xl text-xl leading-snug font-bold tracking-tight text-balance-tight sm:text-3xl">
                “{s.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-sm font-extrabold text-brand">
                  {s.initials}
                </span>
                <div>
                  <p className="text-sm font-extrabold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid size-11 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid size-11 place-items-center rounded-full border border-border transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              <ArrowRight className="size-4" />
            </button>
            <div className="ml-3 flex gap-1.5">
              {slides.map((_, k) => (
                <span
                  key={k}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    k === i ? "w-8 bg-brand" : "w-3 bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
