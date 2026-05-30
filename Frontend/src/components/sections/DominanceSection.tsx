import { SectionReveal } from "../SectionReveal";

export function DominanceSection() {
  return (
    <SectionReveal className="bg-surface py-section">
      <div className="section-container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-32">
        <div className="corner-frame relative min-h-[420px] overflow-hidden bg-office-lines bg-[length:44px_100%,100%_100%]" aria-label="Luxury office meeting room">
          <div className="absolute left-[14%] top-[8%] h-3/4 w-[72%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-[24%] left-[22%] h-5 w-[56%] bg-gradient-to-b from-zinc-500 to-zinc-900" />
          <div className="absolute bottom-[17%] left-[34%] h-14 w-12 border border-white/10 bg-zinc-800" />
          <div className="absolute bottom-[17%] right-[34%] h-14 w-12 border border-white/10 bg-zinc-800" />
        </div>
        <div>
          <h2 className="mb-6 text-headline">Crafting Market Dominance Since 2024</h2>
          <p className="mb-5 leading-8 text-on-surface-variant">
            At Apexzon, we don&apos;t just participate in the market; we redefine its boundaries. Our philosophy is rooted in
            technical precision and creative mastery, ensuring that every campaign is an instrument of growth.
          </p>
          <p className="leading-8 text-on-surface-variant">
            We serve a select group of clients who demand more than results—they demand excellence. Our team of
            specialists operates at the intersection of data science and consumer psychology.
          </p>
          <div className="mt-10 flex gap-16 max-sm:flex-col max-sm:gap-8">
            <div>
              <strong className="block font-display text-[clamp(2.3rem,4vw,4rem)] leading-none text-gold">94%</strong>
              <span className="mt-2 block text-micro uppercase">Retention Rate</span>
            </div>
            <div>
              <strong className="block font-display text-[clamp(2.3rem,4vw,4rem)] leading-none text-gold">10X+</strong>
              <span className="mt-2 block text-micro uppercase">Average ROAS</span>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
