import { SectionHeading } from "../SectionHeading";
import { services } from "../../data";

export function ServicesSection() {
  return (
    <section className="bg-surface-low py-section" id="services">
      <div className="section-container">
        <SectionHeading title="Our Core Specialties" underline />
        <div className="grid grid-cols-2 gap-x-8 gap-y-16 md:grid-cols-4 md:gap-y-24">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className="group flex flex-col items-center gap-6 text-center" key={service.label}>
                <Icon className="h-9 w-9 text-zinc-300 opacity-80 transition group-hover:-translate-y-1 group-hover:text-gold group-hover:opacity-100" aria-hidden="true" />
                <h3 className="font-body text-micro uppercase text-zinc-300 transition group-hover:text-gold">{service.label}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
