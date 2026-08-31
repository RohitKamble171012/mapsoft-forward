import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE } from "./motion";
import { img, portfolioImages as pi } from "@/lib/site-images";

type Cat = "All" | "ERP" | "Mobile" | "Web";

const projects: { title: string; cat: Exclude<Cat, "All">; note: string; img: string }[] = [
  { title: "ERP Software", cat: "ERP", note: "Core operations platform", img: pi.erp1 },
  { title: "Mobile App Development", cat: "Mobile", note: "Cross-platform delivery", img: pi.mobile4 },
  { title: "Modern Web Design", cat: "Web", note: "Marketing & brand site", img: pi.p11 },
  { title: "Enterprise Web Portal", cat: "Web", note: "Internal portal", img: pi.p12 },
  { title: "ERP Features Showcase", cat: "ERP", note: "Module walkthrough", img: pi.erpFeatures },
  { title: "Business Management App", cat: "Mobile", note: "Team operations", img: img.crm },
  { title: "Custom Web Applications", cat: "Web", note: "Bespoke tooling", img: pi.p13 },
  { title: "Accolent ERP System", cat: "ERP", note: "Wholesale distribution", img: pi.accolent1 },
  { title: "E-Commerce Mobile App", cat: "Mobile", note: "Storefront experience", img: pi.accolent3 },
];

const cats: Cat[] = ["All", "ERP", "Mobile", "Web"];

export function Portfolio() {
  const [cat, setCat] = useState<Cat>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <Section id="portfolio" tone="surface">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Work That <span className="text-brand">Ships.</span>
            </>
          }
          description="A selection of the project categories we deliver across ERP, mobile and web."
        />
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                cat === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat === c ? (
                <motion.span
                  layoutId="portfolio-pill"
                  className="absolute inset-0 rounded-xl bg-brand"
                  transition={{ duration: 0.45, ease: EASE }}
                />
              ) : (
                <span className="absolute inset-0 rounded-xl border border-border bg-background" />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 26, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.97 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
              className="group surface-card overflow-hidden p-0"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-surface-2">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-top"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute top-4 right-4 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-brand uppercase backdrop-blur">
                  {p.cat}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="text-base font-extrabold">{p.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.note}</p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-400 group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
