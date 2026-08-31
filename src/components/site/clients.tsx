import { motion } from "motion/react";
import { Reveal } from "./motion";
import { Eyebrow } from "./section";
import { clientLogos } from "@/lib/site-images";

const half = Math.ceil(clientLogos.length / 2);
const rowA = clientLogos.slice(0, half);
const rowB = clientLogos.slice(half);

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-6 transition-colors duration-500 hover:border-brand/50"
    >
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        decoding="async"
        className="max-h-14 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </motion.div>
  );
}

export function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden border-y border-border py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8">
        <Reveal>
          <Eyebrow>Our Clients</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-balance-tight sm:text-4xl">
            Trusted by Businesses That <span className="text-brand">Think Ahead.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Distributors, manufacturers and service businesses running on Mapsoft solutions.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...rowA, ...rowA].map((c, i) => (
            <LogoCard key={`a-${c.name}-${i}`} {...c} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-4">
          {[...rowB, ...rowB].map((c, i) => (
            <LogoCard key={`b-${c.name}-${i}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
