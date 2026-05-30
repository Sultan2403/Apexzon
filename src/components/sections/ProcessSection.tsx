import { processSteps } from "../../data";
import { SectionHeading } from "../SectionHeading";
import { SectionReveal } from "../SectionReveal";

export function ProcessSection() {
  return (
    <SectionReveal className="bg-surface-high py-[clamp(5rem,9vw,8rem)]">
      <div className="section-container">
        <SectionHeading eyebrow="The Methodology" title="Our Process" />
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className={`process-card group grid min-h-72 grid-cols-[auto_1fr] gap-4 border border-outline bg-background/50 p-8 max-sm:grid-cols-1 ${
                  step.featured ? "featured-glow border-b-4 border-l-4 border-b-gold border-l-gold" : ""
                }`}
                key={step.number}
              >
                <span className="process-number">{step.number}</span>
                <div>
                  <Icon className="h-10 w-10 text-gold transition duration-500 group-hover:scale-110 group-hover:rotate-3" aria-hidden="true" />
                  <h3 className="my-4 text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-7 text-on-surface-variant">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
