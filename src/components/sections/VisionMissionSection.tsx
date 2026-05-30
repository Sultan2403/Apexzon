import { FaBullseye, FaEye } from "react-icons/fa6";
import { SectionReveal } from "../SectionReveal";

const cards = [
  {
    icon: FaEye,
    title: "Vision",
    text: "To become a leading force in digital marketing, helping brands rise above the ordinary through powerful advertising, creative strategy, and results that elevate businesses to their highest potential.",
  },
  {
    icon: FaBullseye,
    title: "Mission",
    text: "Our mission is to deliver exceptional marketing solutions that combine data-driven insights with creative excellence to drive sustainable growth and industry leadership for our partners.",
  },
] as const;

export function VisionMissionSection() {
  return (
    <SectionReveal className="bg-surface-lowest py-[clamp(4.5rem,8vw,7.5rem)]">
      <div className="section-container grid gap-6 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article className="glass-card border-l-4 border-l-gold p-8 md:p-12" key={card.title}>
              <div className="mb-6 flex items-center gap-4">
                <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="text-3xl font-bold">{card.title}</h3>
              </div>
              <p className="leading-7 text-on-surface-variant">{card.text}</p>
            </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
