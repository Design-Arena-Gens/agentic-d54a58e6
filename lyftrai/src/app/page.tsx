import Image from "next/image";

const guidelines = [
  {
    title: "Gradient base",
    description:
      "Use the primary gradient (#6C4DFF → #24D6FF) on light backgrounds. For dark surfaces, place the mark on a subtle glow.",
  },
  {
    title: "Clear space",
    description:
      "Maintain padding equal to 40% of the icon height around the logomark. Wordmark can sit to the right with 24px spacing.",
  },
  {
    title: "Minimum size",
    description:
      "For digital usage keep the icon at or above 48px. Use the SVG export for best scaling on retina displays.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#05060D] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#4C58FF_0%,rgba(12,16,40,0.6)_55%,#05060D_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-3xl">
        <div className="absolute left-1/2 top-32 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#2CD7FF]" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-24 sm:px-12 lg:px-20">
        <header className="flex flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
            LyftrAi Visual Identity
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Minimal lift-inspired logo system for LyftrAi
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            A lightweight logomark capturing the upward motion behind LyftrAi.
            Built for scalable use across web, app icons, and pitch materials.
          </p>
        </header>

        <section className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative flex h-[320px] w-[320px] items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-8 shadow-[0_45px_90px_-45px_rgba(45,208,255,0.8)]">
              <div className="absolute inset-0 -z-10 rounded-[40px] bg-white/5 blur-lg" />
              <Image
                src="/lyftrai-logo.svg"
                alt="LyftrAi logomark"
                width={256}
                height={256}
                priority
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/50">
                Wordmark
              </p>
              <div className="mt-3 flex items-end gap-4">
                <span className="text-5xl font-semibold tracking-tight">
                  Lyftr<span className="text-[#65E0FF]">Ai</span>
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                  Geist SemiBold · Tight tracking
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {guidelines.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 px-6 py-4 shadow-[0_12px_28px_-18px_rgba(101,224,255,0.45)] backdrop-blur"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/lyftrai-logo.svg"
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0A1023] transition hover:bg-white/90"
              >
                Download SVG
              </a>
              <a
                href="#usage"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60"
              >
                Usage Notes
              </a>
            </div>
          </div>
        </section>

        <section
          id="usage"
          className="rounded-[32px] border border-white/10 bg-white/5 px-8 py-10 backdrop-blur"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Brand usage notes
              </h2>
              <p className="text-sm leading-relaxed text-white/75">
                The LyftrAi mark combines an upward arrow with a soft capsule to
                hint at momentum, lift, and adaptive intelligence. Keep contrast
                high and avoid stretching the symbol. Wordmark lettering
                inherits the same gradient accent as the logomark for brand
                cohesion.
              </p>
              <ul className="space-y-3 text-sm text-white/70">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#65E0FF]" />
                  Export as SVG for vector workflows or 1024px PNG for raster
                  deliverables.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#65E0FF]" />
                  When used on brand gradients, add a subtle outer glow (32px,
                  20% opacity) to maintain readability.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#65E0FF]" />
                  Pair with high-contrast typography such as Geist or Inter
                  across product touchpoints.
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
              <div className="rounded-2xl border border-white/10 bg-[#060A1A]/80 p-6 shadow-[0_18px_36px_-24px_rgba(109,122,255,0.8)]">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  Color System
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs font-medium text-white/80">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-full rounded-xl bg-[#6C4DFF]" />
                    <span>#6C4DFF</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-full rounded-xl bg-[#5A74FF]" />
                    <span>#5A74FF</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-14 w-full rounded-xl bg-[#24D6FF]" />
                    <span>#24D6FF</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-[#070C1F]/80 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  Typography
                </p>
                <p className="mt-4 text-sm text-white/70">
                  Primary type: Geist, 700 weight for the wordmark, 500 weight
                  for supporting copy. Pair with tight tracking to keep the
                  motion-driven aesthetic.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
