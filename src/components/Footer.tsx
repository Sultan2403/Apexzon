import { FaArrowRight, FaGlobe, FaLink, FaShareNodes } from "react-icons/fa6";
import { footerLinks, navItems } from "../data";

const socialIcons = [
  { icon: FaLink, label: "link" },
  { icon: FaShareNodes, label: "share" },
  { icon: FaGlobe, label: "public" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-outline bg-surface py-16 pb-8">
      <div className="section-container grid gap-12 md:grid-cols-[1.35fr_0.8fr_0.8fr_1.15fr]">
        <div>
          <a className="font-display text-xl font-extrabold tracking-[-0.04em] text-white no-underline" href="#home">
            Apexzon
          </a>
          <p className="my-6 max-w-xs leading-7 text-on-surface-variant">
            Elevating brands through precision marketing and elite strategic growth. Where excellence meets impact.
          </p>
          <div className="flex gap-3">
            {socialIcons.map((social) => {
              const Icon = social.icon;

              return (
                <a className="flex h-10 w-10 items-center justify-center border border-gold/25 text-zinc-300 no-underline transition hover:border-gold hover:text-gold" href="#" key={social.label} aria-label={social.label}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="mb-6 text-micro uppercase text-white">{heading}</h4>
            <ul className="grid gap-4 p-0">
              {links.map((link) => (
                <li className="list-none" key={link}>
                  <a className="text-xs text-zinc-300 no-underline transition hover:text-gold" href={navItems.includes(link as (typeof navItems)[number]) ? `#${link.toLowerCase()}` : "#"}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="mb-6 text-micro uppercase text-white">Stay Connected</h4>
          <p className="mb-6 leading-7 text-on-surface-variant">Join our network for exclusive market insights.</p>
          <label className="flex items-center border-b border-gold/40">
            <input className="min-w-0 flex-1 bg-transparent py-3 pr-3 text-white outline-none" type="email" placeholder="Email Address" />
            <button className="text-gold" aria-label="Subscribe" type="button">
              <FaArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </label>
        </div>
      </div>
      <div className="section-container mt-12 flex flex-wrap justify-between gap-6 border-t border-outline pt-7 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
        <span>© {new Date().getFullYear()} Apexzon Agency. All rights reserved.</span>
        <span>Designed for Excellence</span>
        <span>ISO 9001 Certified</span>
      </div>
    </footer>
  );
}
