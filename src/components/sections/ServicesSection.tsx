import { SectionHeading } from "../SectionHeading";
import { SectionReveal } from "../SectionReveal";
import { services } from "../../data";

export function ServicesSection() {
  return (
    <SectionReveal className="bg-surface-low py-section" id="services">
      <div className="section-container">
        <SectionHeading title="Our Core Specialties" underline />
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-y-24">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="premium-hover-card group flex flex-col items-center gap-6 p-6 text-center" key={service.label}>
                <span className="premium-icon-shell">
                  <Icon className="h-9 w-9 text-zinc-300 opacity-80 transition duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:text-gold group-hover:opacity-100" aria-hidden="true" />
                </span>
                <h3 className="font-body text-micro uppercase text-zinc-300 transition duration-500 group-hover:text-gold">{service.label}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
