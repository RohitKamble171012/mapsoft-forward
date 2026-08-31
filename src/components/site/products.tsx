import { motion } from "motion/react";
import { ArrowUpRight, Boxes, Users, Building2 } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE, StaggerGroup, StaggerItem } from "./motion";

const products = [
  {
    icon: Boxes,
    name: "Mapsoft ERP",
    tag: "Flagship",
    copy: "Cloud-based ERP solution for distributors, light manufacturers and service businesses.",
    points: ["Cloud-native", "Modular", "Role-based"],
  },
  {
    icon: Users,
    name: "CRM",
    tag: "Integrated",
    copy: "Customer relationship management capabilities integrated into the ERP ecosystem.",
    points: ["Pipeline view", "Unified records", "Team activity"],
  },
  {
    icon: Building2,
    name: "Accolent ERP",
    tag: "Vertical",
    copy: "Cloud-based ERP solution designed for wholesale distribution businesses and multiple vertical industries.",
    points: ["Distribution-first", "Multi-industry", "Cloud delivery"],
  },
];

export function Products() {
  return (
    <Section id="products" tone="surface">
      <SectionHeading
        eyebrow="Products"
        title={
          <>
            Products Built for <span className="text-brand">Real Business.</span>
          </>
        }
        description="Platforms shaped by real operational requirements — not generic templates."
      />

      <StaggerGroup className="mt-14 grid gap-5 lg:grid-cols-3" delay={0.12}>
        {products.map((p) => (
          <StaggerItem key={p.name}>
            <motion.article
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="group surface-card relative h-full overflow-hidden p-7 transition-shadow duration-500 hover:shadow-[0_40px_80px_-40px_var(--brand)]"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 size-56 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100 brand-glow-orb" />

              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-primary-foreground">
                  <p.icon className="size-5" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
                  {p.tag}
                </span>
              </div>

              <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight">{p.name}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>

              <ul className="relative mt-5 flex flex-wrap gap-2">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-lg bg-surface-2 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground"
                  >
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="relative mt-8 overflow-hidden rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-border" />
                  <span className="size-1.5 rounded-full bg-border" />
                  <span className="size-1.5 rounded-full bg-brand/60" />
                </div>
                <motion.div
                  className="mt-3 space-y-2"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[100, 72, 86, 54].map((w, i) => (
                    <motion.div
                      key={i}
                      className="h-2 rounded-full bg-gradient-to-r from-brand-soft to-surface-2 transition-all duration-500 group-hover:from-brand/60"
                      style={{ width: `${w}%` }}
                    />
                  ))}
                </motion.div>
              </div>

              <a
                href="#contact"
                className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand"
              >
                Request a walkthrough
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
