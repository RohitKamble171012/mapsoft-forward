import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE, StaggerGroup, StaggerItem } from "./motion";

const steps = [
  { icon: Search, title: "Discover", copy: "We map how your business runs before proposing anything." },
  { icon: PenTool, title: "Design", copy: "Workflows and interfaces designed around real users." },
  { icon: Code2, title: "Develop", copy: "Custom software and ERP built to fit, not to force." },
  { icon: Rocket, title: "Deploy", copy: "Fast implementation with careful rollout and training." },
  { icon: LifeBuoy, title: "Support", copy: "Ongoing support and maintenance after go-live." },
];

const values = [
  "Cost-effective solutions",
  "Fast implementation",
  "Business-focused ERP",
  "Custom software",
  "Experienced team",
  "Scalable solutions",
  "Ongoing support",
];

export function WhyMapsoft() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why Mapsoft"
        title={
          <>
            Why Businesses <span className="text-brand">Choose Mapsoft</span>
          </>
        }
        description="A delivery process designed for clarity, speed and long-term reliability."
      />

      <StaggerGroup className="mt-10 flex flex-wrap gap-2.5">
        {values.map((v) => (
          <StaggerItem key={v}>
            <motion.span
              whileHover={{ y: -4 }}
              className="inline-block rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              {v}
            </motion.span>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <div ref={ref} className="relative mt-16">
        <div className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block" />
        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute top-7 right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-brand to-brand-glow lg:block"
        />

        <ol className="grid gap-8 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
              className="group relative"
            >
              <span className="relative z-10 grid size-14 place-items-center rounded-2xl border border-border bg-background text-brand transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground group-hover:shadow-[0_20px_44px_-22px_var(--brand)]">
                <s.icon className="size-5" />
              </span>
              <p className="mt-5 text-[11px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                Step {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1.5 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
