import { Reveal } from "./motion";

const clients = [
  "Client One",
  "Client Two",
  "Client Three",
  "Client Four",
  "Client Five",
  "Client Six",
  "Client Seven",
  "Client Eight",
];

export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="relative overflow-hidden border-y border-border py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            Trusted by Businesses That <span className="text-brand">Think Ahead.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex h-20 w-52 items-center justify-center rounded-2xl border border-border bg-surface transition-colors duration-500 hover:border-brand/40"
            >
              <span className="text-sm font-bold tracking-[0.16em] text-muted-foreground uppercase">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
