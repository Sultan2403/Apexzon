import { processSteps } from "../../data";
import { SectionHeading } from "../SectionHeading";

export function ProcessSection() {
  return (
    <section className="bg-surface-high py-[clamp(5rem,9vw,8rem)]">
      <div className="section-container">
        <SectionHeading eyebrow="The Methodology" title="Our Process" />
        <div className="grid gap-6 md:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                className={`grid min-h-72 grid-cols-[auto_1fr] gap-4 border border-outline bg-background/50 p-8 transition hover:border-l-gold max-sm:grid-cols-1 ${
                  step.featured ? "border-b-4 border-l-4 border-b-gold border-l-gold" : ""
                }`}
                key={step.number}
              >
                <span className="process-number">{step.number}</span>
                <div>
                  <Icon className="h-10 w-10 text-gold" aria-hidden="true" />
                  <h3 className="my-4 text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm leading-7 text-on-surface-variant">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
