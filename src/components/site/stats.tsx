import { Counter, Reveal } from "./motion";

const stats = [
  { value: 39, suffix: "+", label: "Happy Clients" },
  { value: 48, suffix: "+", label: "Projects" },
  { value: null, display: "24/7", label: "Hours Of Support" },
  { value: 39, suffix: "+", label: "Smart Workers" },
] as const;

export function Stats() {
  return (
    <section className="relative border-y border-border bg-surface">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-border px-5 sm:px-8 lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="px-2 py-10 sm:px-8 sm:py-14">
            <p className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {"display" in s && s.display ? (
                <span className="text-brand">{s.display}</span>
              ) : (
                <>
                  <Counter value={s.value as number} />
                  <span className="text-brand">{s.suffix}</span>
                </>
              )}
            </p>
            <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase sm:text-sm">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
