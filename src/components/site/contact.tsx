import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { toast } from "sonner";
import { Section, SectionHeading } from "./section";
import { EASE, Reveal } from "./motion";

const offices = [
  {
    country: "India",
    address:
      "Office No 105, The Space, Grant Road, Near Gera Imperium Alpha, Kharadi, Pune - 411014, Maharashtra, India",
    phone: "+91 8484960350",
  },
  {
    country: "USA",
    address: "14540 E Beltwood Pkwy Ste 500, Dallas Texas 75244, USA",
    phone: "+1 (863)-441-3020",
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks — this demo form doesn't send messages yet.", {
      description: "Reach us directly at info@maptechsoft.com.",
    });
    setTimeout(() => setSent(false), 2600);
  };

  return (
    <Section id="contact" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Talk to <span className="text-brand">Mapsoft.</span>
              </>
            }
            description="Mapsoft Technologies LLP — offices in India and the United States."
          />

          <div className="mt-10 grid gap-4">
            {offices.map((o, i) => (
              <Reveal key={o.country} delay={i * 0.1}>
                <div className="surface-card p-6">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-brand uppercase">
                    {o.country}
                  </p>
                  <p className="mt-3 flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                    {o.address}
                  </p>
                  <a
                    href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-3 inline-flex items-center gap-3 text-sm font-semibold transition-colors hover:text-brand"
                  >
                    <Phone className="size-4 text-brand" />
                    {o.phone}
                  </a>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <a
                href="mailto:info@maptechsoft.com"
                className="surface-card group flex items-center gap-3 p-6 transition-colors duration-400 hover:border-brand"
              >
                <Mail className="size-4 text-brand" />
                <span className="text-sm font-semibold group-hover:text-brand">
                  info@maptechsoft.com
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="surface-card relative h-44 overflow-hidden p-0">
                <div className="absolute inset-0 grid-bg" />
                <div className="brand-glow-orb absolute top-1/2 left-1/3 size-48 -translate-y-1/2 rounded-full opacity-60" />
                <div className="relative flex h-full items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  <MapPin className="size-4 text-brand" />
                  Pune · Dallas
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="surface-card h-fit p-7 sm:p-9"
        >
          <h3 className="text-2xl font-extrabold tracking-tight">Send us a message</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              { id: "name", label: "Full name", type: "text", ph: "Jane Doe" },
              { id: "email", label: "Work email", type: "email", ph: "jane@company.com" },
              { id: "company", label: "Company", type: "text", ph: "Company name" },
              { id: "phone", label: "Phone", type: "tel", ph: "+91 00000 00000" },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-2">
                <label htmlFor={f.id} className="text-xs font-semibold text-muted-foreground">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  required={f.id === "name" || f.id === "email"}
                  placeholder={f.ph}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-brand focus:ring-4 focus:ring-accent"
                />
              </div>
            ))}
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-xs font-semibold text-muted-foreground">
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Briefly describe your project or challenge…"
                className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-brand focus:ring-4 focus:ring-accent"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_44px_-18px_var(--brand)]"
          >
            {sent ? (
              <>
                <Check className="size-4" /> Message ready
              </>
            ) : (
              <>
                Send message <Send className="size-4" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </Section>
  );
}
