import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE, StaggerGroup, StaggerItem } from "./motion";
import { teamPhotos } from "@/lib/site-images";

const team = [
  {
    name: "Manish Yengantiwar",
    role: "CEO (Chief Executive Officer)",
    photo: teamPhotos.manish,
  },
  { name: "Prsadd Patil", role: "COO (Chief Operating Officer)", photo: teamPhotos.prsadd },
  {
    name: "Sandeep Ghatge",
    role: "Team Lead (Software Development)",
    photo: teamPhotos.sandeep,
  },
];

export function Team() {
  return (
    <Section id="team">
      <SectionHeading
        eyebrow="Team"
        title={
          <>
            The People Behind <span className="text-brand">Mapsoft.</span>
          </>
        }
        description="A close-knit leadership team involved in every engagement."
        align="center"
      />

      <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={0.12}>
        {team.map((m) => (
          <StaggerItem key={m.name}>
            <motion.article
              whileHover={{ y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="group surface-card relative overflow-hidden p-7 text-center transition-shadow duration-500 hover:shadow-[0_36px_80px_-40px_var(--brand)]"
            >
              <div className="brand-glow-orb pointer-events-none absolute -top-24 left-1/2 size-56 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative mx-auto size-32 overflow-hidden rounded-3xl bg-surface-2 ring-1 ring-border transition-all duration-500 group-hover:ring-brand">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="relative mt-6 text-lg font-extrabold">{m.name}</h3>
              <p className="relative mt-1 text-sm text-muted-foreground">{m.role}</p>
              <div className="relative mt-5 flex justify-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                {[Linkedin, Mail].map((Icon, i) => (
                  <span
                    key={i}
                    className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    <Icon className="size-4" />
                  </span>
                ))}
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
