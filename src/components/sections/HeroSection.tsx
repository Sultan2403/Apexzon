import { FaChevronDown } from "react-icons/fa6";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-[74px]" id="home">
      <div className="absolute inset-0 opacity-80" aria-hidden="true">
        <div className="absolute -right-48 -top-20 h-[760px] w-[460px] animate-pulse-gold rounded-full border-2 border-gold/20" />
        <div className="absolute -bottom-36 right-[10%] h-[520px] w-[520px] rounded-full border-2 border-white/10" />
        <div className="absolute right-[10%] top-[26%] h-[min(34vw,430px)] w-[min(34vw,430px)] animate-float-slow bg-gradient-to-br from-zinc-800 to-black shadow-[40px_30px_80px_rgba(0,0,0,0.8)] max-md:right-[-8%] max-md:opacity-45" />
      </div>
      <div className="absolute inset-0 z-10 bg-hero-fade" />
      <div className="section-container relative z-20">
        <p className="eyebrow animate-fade-up">Marketing Mastery</p>
        <h1 className="mb-8 max-w-[780px] animate-fade-up font-display text-display [animation-delay:120ms]">
          <span className="block text-primary/95">Where Marketing</span>
          <span className="block text-primary/95">Meets </span>
          <em className="relative inline-block pr-2 text-gold not-italic">
            Mastery.
            <span className="absolute -bottom-2 left-1 h-px w-[92%] bg-gradient-to-r from-gold via-gold/60 to-transparent" aria-hidden="true" />
          </em>
        </h1>
        <p className="mb-10 max-w-2xl animate-fade-up text-lg leading-8 text-zinc-300 [animation-delay:240ms]">
          We transcend conventional growth hacking to deliver elite market dominance. Apexzon is the silent engine behind
          industry-leading scale.
        </p>
        <div className="flex animate-fade-up flex-wrap gap-4 [animation-delay:360ms] max-sm:flex-col">
          <a className="btn btn-primary" href="#contact">
            Contact Us
          </a>
          <a className="btn btn-secondary" href="#about">
            Learn More
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-[0.63rem] uppercase tracking-[0.22em] text-white/35" aria-hidden="true">
        <span>Scroll</span>
        <FaChevronDown className="h-5 w-5" />
      </div>
    </section>
  );
}
