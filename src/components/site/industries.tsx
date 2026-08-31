import { motion } from "motion/react";
import { Truck, Factory, Store, Briefcase, Building2, Boxes } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE, StaggerGroup, StaggerItem } from "./motion";

const industries = [
  { icon: Truck, name: "Distribution", copy: "Wholesale distribution workflows supported by the ERP platform." },
  { icon: Factory, name: "Manufacturing", copy: "Light manufacturing with bill of material and inventory control." },
  { icon: Store, name: "Retail", copy: "Sales, stock and order handling in one connected system." },
  { icon: Briefcase, name: "Services", copy: "Service businesses managing customers, jobs and billing." },
  { icon: Building2, name: "Enterprise", copy: "Multi-team environments needing structured, scalable software." },
  { icon: Boxes, name: "Other SMB Businesses", copy: "Growing businesses adopting their first modern platform." },
];

export function Industries() {
  return (
    <Section id="industries" tone="surface">
      <SectionHeading
        eyebrow="Industries"
        title={
          <>
            Built for the Businesses <span className="text-brand">We Work With.</span>
          </>
        }
        description="Mapsoft solutions serve distributors, light manufacturers, service businesses and multiple vertical industries."
        align="center"
      />

      <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.09}>
        {industries.map((it) => (
          <StaggerItem key={it.name}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="group surface-card relative h-full overflow-hidden p-6 transition-shadow duration-500 hover:shadow-[0_32px_70px_-40px_var(--brand)]"
            >
              <div className="pointer-events-none absolute inset-0 grid-bg opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <span className="relative grid size-12 place-items-center rounded-2xl bg-accent text-brand transition-all duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:text-primary-foreground">
                <it.icon className="size-5" />
              </span>
              <h3 className="relative mt-5 text-lg font-extrabold">{it.name}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {it.copy}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
