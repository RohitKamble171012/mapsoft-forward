import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ClipboardList,
  BarChart3,
  Truck,
  Warehouse,
  Package,
  ShoppingCart,
  Receipt,
  Layers,
  Calculator,
  Percent,
} from "lucide-react";
import { Section, SectionHeading } from "./section";
import { EASE } from "./motion";

const features = [
  { icon: ClipboardList, name: "Order Management", copy: "Capture, track and fulfil orders across every channel from a single queue." },
  { icon: BarChart3, name: "Report & Dashboard", copy: "Operational dashboards and reporting that surface what needs attention." },
  { icon: Truck, name: "Shipping Management", copy: "Coordinate shipments, carriers and delivery status end to end." },
  { icon: Warehouse, name: "Warehouse Management", copy: "Locations, bins and movements organised for accurate picking." },
  { icon: Package, name: "Inventory Management", copy: "Live stock positions across items, warehouses and reorder points." },
  { icon: ShoppingCart, name: "Purchasing Management", copy: "Purchase orders, vendors and receiving in one controlled flow." },
  { icon: Receipt, name: "Sales Management", copy: "Quotes to invoices with pricing, customers and margins connected." },
  { icon: Layers, name: "Bill of Material", copy: "Structured BOMs for light manufacturing and assembly work." },
  { icon: Calculator, name: "Accounting Management", copy: "Financial records aligned with day-to-day operational activity." },
  { icon: Percent, name: "Sales & Use Tax", copy: "Tax handling built into the transaction, not bolted on after." },
];

const datasets = [
  [42, 68, 55, 80, 62, 91, 74],
  [70, 48, 82, 60, 95, 55, 68],
  [55, 75, 40, 88, 66, 72, 84],
];

export function ErpFeatures() {
  const [active, setActive] = useState(0);
  const f = features[active]!;
  const data = datasets[active % datasets.length]!;


  return (
    <Section id="erp">
      <SectionHeading
        eyebrow="ERP Capabilities"
        title={
          <>
            Everything Your Business Needs. <span className="text-brand">In One System.</span>
          </>
        }
        description="Explore the modules that make up the Mapsoft ERP platform."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="surface-card sticky top-28 h-fit overflow-hidden p-0"
        >
          <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-border" />
              <span className="size-2.5 rounded-full bg-brand/60" />
            </div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              Mapsoft ERP
            </p>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-brand">
                    <f.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">{f.name}</h3>
                    <p className="text-xs text-muted-foreground">Module {String(active + 1).padStart(2, "0")} / 10</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.copy}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Throughput", "Accuracy", "Cycle time"].map((k, i) => (
                <div key={k} className="rounded-xl border border-border bg-surface p-3">
                  <p className="text-[10px] tracking-wide text-muted-foreground uppercase">{k}</p>
                  <motion.p
                    key={`${f.name}-${k}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="mt-1 text-lg font-extrabold text-brand"
                  >
                    {data[i] + i * 3}
                    {i === 2 ? "h" : "%"}
                  </motion.p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex h-40 items-end gap-2.5 rounded-xl border border-border bg-surface p-4">
              {data.map((h, i) => (
                <motion.div
                  key={`${f.name}-bar-${i}`}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-soft to-brand"
                  initial={{ height: "10%" }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: EASE }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {features.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
            >
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`group flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-400 ${
                  active === i
                    ? "border-brand/40 bg-accent/60 shadow-[0_18px_40px_-28px_var(--brand)]"
                    : "border-border bg-background hover:border-brand/30"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl transition-colors duration-400 ${
                    active === i ? "bg-brand text-primary-foreground" : "bg-surface-2 text-muted-foreground"
                  }`}
                >
                  <item.icon className="size-4" />
                </span>
                <span className="text-sm font-bold">{item.name}</span>
                <span
                  className={`ml-auto text-[11px] font-semibold tabular-nums transition-colors ${
                    active === i ? "text-brand" : "text-muted-foreground"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
