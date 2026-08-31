import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Database,
  Package,
  Smartphone,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import { EASE, Floating, Magnetic } from "./motion";
import { portfolioImages } from "@/lib/site-images";

const bars = [38, 62, 46, 78, 58, 92, 70];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yVisual = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yCopy = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_60%_20%,black,transparent)]" />
      <div className="brand-glow-orb pointer-events-none absolute -top-24 right-[-10%] size-[520px] rounded-full opacity-70" />
      <div className="brand-glow-orb pointer-events-none absolute top-64 left-[-15%] size-[380px] rounded-full opacity-40" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <motion.div style={{ y: yCopy, opacity: fade }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-muted-foreground uppercase backdrop-blur"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
            </span>
            Mapsoft Technologies
          </motion.div>

          <h1 className="mt-6 text-[2.6rem] leading-[1.02] font-extrabold text-balance-tight sm:text-6xl lg:text-[4.2rem]">
            {["Technology", "That", "Moves", "Your", "Business", "Forward."].map((w, i) => (
              <span key={w} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  className={
                    w === "Moves" || w === "Forward."
                      ? "inline-block text-brand"
                      : "inline-block"
                  }
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.07, ease: EASE }}
                >
                  {w}
                  {"\u00A0"}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Powerful software, ERP, mobile and digital solutions built to simplify operations,
            accelerate growth and create lasting business value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_44px_-18px_var(--brand)] transition-shadow duration-500 hover:shadow-[0_26px_60px_-18px_var(--brand)]"
              >
                Explore Our Solutions
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Talk to Our Experts
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-8 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase"
          >
            Custom Software <span className="text-brand">•</span> ERP{" "}
            <span className="text-brand">•</span> Mobile <span className="text-brand">•</span> Cloud{" "}
            <span className="text-brand">•</span> AI
          </motion.p>
        </motion.div>

        <motion.div style={{ y: yVisual }} className="relative mx-auto w-full max-w-[560px]">
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[5/5.4] w-full">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
        className="surface-card absolute inset-x-0 top-8 mx-auto w-[88%] p-5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Mapsoft ERP
            </p>
            <p className="mt-1 text-lg font-extrabold">Operations Overview</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
            <span className="size-1.5 rounded-full bg-brand" /> Live
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="mt-5 aspect-[16/10] overflow-hidden rounded-xl border border-border"
        >
          <img
            src={portfolioImages.erp1}
            alt="Mapsoft ERP operations dashboard"
            className="size-full object-cover object-top"
            fetchPriority="high"
            decoding="async"
          />
        </motion.div>

        <div className="mt-4 flex h-16 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: `${h}%`, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 + i * 0.08, ease: EASE }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand-soft to-brand"
              style={{ opacity: 0.35 + (h / 100) * 0.65 }}
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
          {[
            { label: "Orders", value: "1,284" },
            { label: "Fulfilled", value: "97%" },
            { label: "SKUs", value: "8,410" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 + i * 0.1 }}
            >
              <p className="text-[11px] tracking-wide text-muted-foreground uppercase">{s.label}</p>
              <p className="text-base font-extrabold">{s.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Floating className="absolute -top-2 -left-2 sm:-left-6" amplitude={14} duration={7}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="surface-card flex items-center gap-3 px-4 py-3"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-accent text-brand">
            <TrendingUp className="size-4" />
          </span>
          <div>
            <p className="text-[11px] text-muted-foreground">Revenue growth</p>
            <p className="text-sm font-extrabold">+24.6%</p>
          </div>
        </motion.div>
      </Floating>

      <Floating
        className="absolute top-40 -right-2 sm:-right-8"
        amplitude={16}
        duration={8}
        delay={0.5}
      >
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
          className="surface-card w-44 p-4"
        >
          <div className="flex items-center gap-2">
            <Package className="size-4 text-brand" />
            <p className="text-xs font-bold">Inventory</p>
          </div>
          {[82, 54, 38].map((v, i) => (
            <div key={i} className="mt-3">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <motion.div
                  className="h-full rounded-full bg-brand"
                  initial={{ width: 0 }}
                  animate={{ width: `${v}%` }}
                  transition={{ duration: 1.1, delay: 1.3 + i * 0.15, ease: EASE }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </Floating>

      <Floating className="absolute bottom-16 left-0 sm:-left-4" amplitude={12} duration={9} delay={1}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          className="surface-card w-40 overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <Smartphone className="size-4 text-brand" />
            <p className="text-xs font-bold">Mobile App</p>
          </div>
          <div className="space-y-2 p-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full bg-surface-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: 0, width: `${100 - i * 18}%` }}
                transition={{ duration: 0.7, delay: 1.5 + i * 0.12 }}
              />
            ))}
          </div>
        </motion.div>
      </Floating>

      <div className="absolute right-2 bottom-2 flex gap-3 sm:right-8">
        {[
          { icon: Cloud, label: "Cloud" },
          { icon: Database, label: "SQL" },
          { icon: ShieldCheck, label: "Secure" },
        ].map((n, i) => (
          <Floating key={n.label} amplitude={10} duration={6 + i} delay={i * 0.4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.12, ease: EASE }}
              className="surface-card grid size-14 place-items-center gap-0.5"
            >
              <n.icon className="size-4 text-brand" />
              <span className="text-[9px] font-semibold text-muted-foreground">{n.label}</span>
            </motion.div>
          </Floating>
        ))}
      </div>
    </div>
  );
}
