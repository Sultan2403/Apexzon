import { FaChevronDown } from "react-icons/fa6";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[74px]" id="home">
      <div className="absolute inset-0 opacity-80" aria-hidden="true">
        <div className="hero-orb hero-orb-gold" />
        <div className="hero-orb hero-orb-ivory" />
        <div className="hero-ring absolute -right-48 -top-20 h-[760px] w-[460px] rotate-[-28deg] rounded-full border-2 border-gold/20" />
        <div className="hero-ring absolute -bottom-36 right-[10%] h-[520px] w-[520px] rounded-full border-2 border-white/10 [animation-delay:1.2s]" />
        <div className="hero-monolith absolute right-[10%] top-[26%] h-[min(34vw,430px)] w-[min(34vw,430px)] rotate-[32deg] skew-x-[-11deg] bg-gradient-to-br from-zinc-800 to-black shadow-[40px_30px_80px_rgba(0,0,0,0.8)] max-md:right-[-8%] max-md:opacity-45" />
      </div>
      <div className="absolute inset-0 z-10 bg-hero-fade" />
      <div className="section-container relative z-20">
        <div className="hero-copy max-w-3xl">
          <p className="eyebrow animate-fade-up">Marketing Mastery</p>
          <h1 className="mb-8 text-display text-balance">
            <span className="block">Where Marketing</span>
            <span className="block font-semibold text-primary/95">Meets <em className="premium-gradient not-italic">Mastery.</em></span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-8 text-zinc-300 [animation-delay:220ms] animate-fade-up">
            We transcend conventional growth hacking to deliver elite market dominance. Apexzon is the silent engine behind
            industry-leading scale.
          </p>
          <div className="flex flex-wrap gap-4 max-sm:flex-col [animation-delay:360ms] animate-fade-up">
            <a className="btn btn-primary" href="#contact">
              Contact Us
            </a>
            <a className="btn btn-secondary" href="#about">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-cue absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-[0.63rem] uppercase tracking-[0.22em] text-white/35" aria-hidden="true">
        <span>Scroll</span>
        <FaChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}
