import { motion } from "motion/react";
import {
  Code2,
  Boxes,
  Smartphone,
  Database,
  MessagesSquare,
  Sparkles,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE, Floating, Reveal, StaggerGroup, StaggerItem } from "./motion";
import { img } from "@/lib/site-images";

const features = [
  { icon: Code2, title: "Software Design & Development", copy: "Systems designed around how your business actually runs." },
  { icon: Boxes, title: "Custom ERP Development", copy: "Operations, inventory and finance unified in one platform." },
  { icon: Smartphone, title: "Mobile Application Development", copy: "Native-feeling apps for teams, field staff and customers." },
  { icon: Database, title: "Database Design & Development", copy: "Structured, performant data foundations built to scale." },
  { icon: MessagesSquare, title: "Database Consulting", copy: "Expert guidance on architecture, tuning and migration." },
];

const badges = [
  { icon: Sparkles, label: "Innovation", pos: "-top-4 left-4" },
  { icon: ShieldCheck, label: "Reliability", pos: "top-1/2 -right-4" },
  { icon: Rocket, label: "Growth", pos: "-bottom-4 left-1/3" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="brand-glow-orb pointer-events-none absolute -inset-10 opacity-50" />
          <Reveal className="relative">
            <div className="surface-card overflow-hidden p-0">
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={img.about}
                  alt="Mapsoft Technologies team collaborating on software delivery"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: EASE }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
              </div>
              <div className="flex items-center gap-2 border-y border-border bg-surface px-5 py-3.5">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-brand/60" />
                <p className="ml-3 text-xs font-semibold text-muted-foreground">
                  mapsoft · business console
                </p>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-2">
                {[
                  { k: "Active Modules", v: "12" },
                  { k: "Uptime", v: "99.9%" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl border border-border bg-surface p-4">
                    <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                      {s.k}
                    </p>
                    <p className="mt-1 text-2xl font-extrabold text-brand">{s.v}</p>
                  </div>
                ))}
                <div className="rounded-xl border border-border p-4 sm:col-span-2">
                  <p className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    Workflow health
                  </p>
                  <div className="mt-4 space-y-3">
                    {[92, 74, 61].map((v, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-16 text-[11px] text-muted-foreground">
                          {["Sales", "Supply", "Finance"][i]}
                        </span>
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-brand-glow to-brand"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${v}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: EASE }}
                          />
                        </div>
                        <span className="w-9 text-right text-[11px] font-semibold">{v}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {badges.map((b, i) => (
            <Floating key={b.label} className={`absolute ${b.pos} z-10`} delay={i * 0.6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: EASE }}
                className="surface-card flex items-center gap-2 px-3.5 py-2"
              >
                <b.icon className="size-3.5 text-brand" />
                <span className="text-xs font-bold">{b.label}</span>
              </motion.div>
            </Floating>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About Mapsoft"
            title={
              <>
                Built Around <span className="text-brand">Your Business.</span>
              </>
            }
            description="Mapsoft Technologies LLP delivers custom software development, mobile applications, digital marketing and technology solutions. We work closely with businesses to understand how they operate, then build systems that simplify the day-to-day and support long-term growth."
          />

          <Reveal delay={0.2} className="mt-6">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Our mission is to make quality technology accessible and practical: dependable
              software, delivered cost-effectively, backed by a team that stays involved long after
              launch.
            </p>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group surface-card h-full p-5 transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_var(--brand)]"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-accent text-brand transition-transform duration-500 group-hover:scale-110">
                    <f.icon className="size-4.5" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.copy}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
