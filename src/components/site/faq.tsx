import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE } from "./motion";

const faqs = [
  {
    q: "What kind of response times can I expect?",
    a: "Support is available 24/7 and requests are acknowledged as soon as they reach our team, with priority given to issues affecting live business operations.",
  },
  {
    q: "How does a flat rate billing save me money?",
    a: "A predictable flat rate keeps your technology spend stable, removes surprise hourly charges and lets us focus on preventing problems rather than billing for them.",
  },
  {
    q: "What type of products & services do you provide?",
    a: "We provide custom software development, ERP and CRM products, web and mobile application development, database services, cloud and DevOps, QA, digital marketing and ongoing maintenance and support.",
  },
  {
    q: "What if we already have an internal IT department?",
    a: "We work alongside internal teams — supplementing capacity with dedicated developers, taking on specialist work, or supporting specific products while your team handles day-to-day IT.",
  },
  {
    q: "What should I do before I call for help?",
    a: "Note what you were doing when the issue appeared, any error message shown and whether it affects one user or many. That detail lets us diagnose faster on the first call.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We support standard business payment methods for our India and USA operations. Our team will confirm the options that apply to your engagement and location.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-brand">Answered.</span>
            </>
          }
          description="The things businesses ask us most before getting started."
        />

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="border-b border-border"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 py-5 text-left"
                >
                  <span
                    className={`flex-1 text-base font-bold transition-colors duration-400 sm:text-lg ${
                      isOpen ? "text-brand" : ""
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "rotate-45 border-brand bg-brand text-primary-foreground"
                        : "border-border text-muted-foreground"
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
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pr-12 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
