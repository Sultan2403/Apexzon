import { FaAt, FaEnvelope, FaGlobe, FaLink, FaLocationDot, FaShareNodes } from "react-icons/fa6";
import { SectionReveal } from "../SectionReveal";

const socialIcons = [
  { icon: FaLink, label: "link" },
  { icon: FaShareNodes, label: "share" },
  { icon: FaGlobe, label: "public" },
  { icon: FaAt, label: "email" },
] as const;

export function ContactSection() {
  return (
    <SectionReveal className="bg-surface-lowest py-section" id="contact">
      <div className="section-container grid items-start gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-28">
        <div>
          <h2 className="mb-6 text-headline">Let&apos;s Talk</h2>
          <p className="max-w-2xl leading-8 text-on-surface-variant">
            Ready to secure your position as a market leader? Contact us today for a confidential strategy assessment.
            Our experts are standing by to elevate your brand.
          </p>
          <div className="my-9 grid gap-4 border-b border-white/10 pb-9">
            <a className="contact-link flex items-center gap-3 no-underline" href="mailto:hello@apexzon.agency">
              <span className="border border-gold p-1.5 text-gold">
                <FaEnvelope className="h-5 w-5" aria-hidden="true" />
              </span>
              hello@apexzon.agency
            </a>
            <span className="flex items-center gap-3">
              <span className="border border-gold p-1.5 text-gold">
                <FaLocationDot className="h-5 w-5" aria-hidden="true" />
              </span>
              District 1, Creative Hub, LX
            </span>
          </div>
          <div>
            <span className="mb-4 block text-micro uppercase text-on-surface-variant">Follow our journey</span>
            <div className="flex gap-3">
              {socialIcons.map((social) => {
                const Icon = social.icon;

                return (
                  <a className="interactive-icon flex h-10 w-10 items-center justify-center border border-gold/25 no-underline" href="#" key={social.label} aria-label={social.label}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <form className="grid gap-5 border-t-4 border-gold bg-surface-container p-6 md:p-12" aria-label="Contact inquiry form">
          <label className="grid gap-2 text-micro uppercase text-primary">
            Name
            <input className="premium-field border border-outline bg-surface-low p-4 text-base normal-case tracking-normal text-white outline-none focus:border-gold/70" type="text" placeholder="Your Full Name" />
          </label>
          <label className="grid gap-2 text-micro uppercase text-primary">
            Email
            <input className="premium-field border border-outline bg-surface-low p-4 text-base normal-case tracking-normal text-white outline-none focus:border-gold/70" type="email" placeholder="Corporate Email Address" />
          </label>
          <label className="grid gap-2 text-micro uppercase text-primary">
            Message
            <textarea className="premium-field min-h-32 resize-y border border-outline bg-surface-low p-4 text-base normal-case tracking-normal text-white outline-none focus:border-gold/70" placeholder="Briefly describe your goals..." />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Inquiry
          </button>
        </form>
      </div>
    </SectionReveal>
  );
}
