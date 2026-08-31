import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE } from "./motion";

const categories = [
  {
    num: "01",
    title: "Software Engineering",
    items: [
      "Custom Software Development",
      "Legacy Software Modernization",
      "Database Development & Management",
    ],
  },
  {
    num: "02",
    title: "Digital Products",
    items: ["Web Development", "Mobile App Development", "UI/UX Design"],
  },
  {
    num: "03",
    title: "Cloud & Infrastructure",
    items: ["DevOps & Cloud Services", "Cost-effective Solutions"],
  },
  {
    num: "04",
    title: "AI & Digital Growth",
    items: ["AI & Digital Marketing"],
  },
  {
    num: "05",
    title: "Quality & Maintenance",
    items: [
      "Software Testing & Quality Assurance",
      "Software Maintenance & Support",
      "24/7 Support",
    ],
  },
  {
    num: "06",
    title: "Consulting & Teams",
    items: [
      "Consulting & Advisory",
      "Dedicated Development Teams",
      "Offshore/Nearshore Outsourcing",
      "Project Management",
      "Documentation & Training",
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="services" tone="surface">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Technology Services That <span className="text-brand">Scale With You.</span>
          </>
        }
        description="Seventeen capabilities, organised into six practices you can actually navigate."
      />

      <div className="mt-14 border-t border-border">
        {categories.map((c, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
              className="group border-b border-border"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-5 py-7 text-left transition-colors sm:gap-8"
              >
                <span
                  className={`text-sm font-extrabold tabular-nums transition-colors duration-500 ${
                    isOpen ? "text-brand" : "text-muted-foreground group-hover:text-brand"
                  }`}
                >
                  {c.num}
                </span>
                <span
                  className={`flex-1 text-2xl font-extrabold tracking-tight transition-all duration-500 sm:text-4xl ${
                    isOpen ? "text-brand" : "group-hover:translate-x-2"
                  }`}
                >
                  {c.title}
                </span>
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                    isOpen
                      ? "rotate-45 border-brand bg-brand text-primary-foreground"
                      : "border-border group-hover:border-brand group-hover:text-brand"
                  }`}
                >
                  <Plus className="size-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-wrap gap-2.5 pb-8 sm:pl-16">
                      {c.items.map((it, j) => (
                        <motion.li
                          key={it}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.08 + j * 0.06 }}
                          className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-brand hover:text-brand"
                        >
                          {it}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
