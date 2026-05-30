import { FaUsers } from "react-icons/fa6";

export function AboutSection() {
  return (
    <section className="bg-surface-low py-section" id="about">
      <div className="section-container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-32">
        <div className="animate-fade-up">
          <p className="eyebrow">About Us</p>
          <h2 className="mb-6 text-headline">Who We Are</h2>
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            Apexzon is a modern advertising and marketing agency built to elevate brands. We combine creativity,
            strategy, and innovation to help businesses grow, gain visibility, and achieve meaningful results. At
            Apexzon, we don’t just market brands — we build strong digital presence and create opportunities for growth.
          </p>
        </div>
        <div className="corner-frame relative mx-auto flex h-52 w-52 animate-fade-up items-center justify-center border border-gold/30 shadow-gold-soft [animation-delay:160ms]" aria-hidden="true">
          <FaUsers className="h-24 w-24 text-gold/15" />
        </div>
      </div>
    </section>
  );
}
