import { navItems } from "../data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[74px] items-center justify-between border-b border-outline bg-background/75 px-gutter backdrop-blur-lg md:h-[74px]">
      <a className="font-display text-xl font-extrabold tracking-[-0.04em] text-white no-underline" href="#home" aria-label="Apexzon home">
        Apexzon
      </a>
      <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`text-xs no-underline transition hover:text-white ${
              item === "Home" ? "border-b-2 border-white pb-1 font-bold text-white" : "text-zinc-300"
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
      <a className="btn btn-primary hidden md:inline-flex" href="#contact">
        Contact Us
      </a>
    </header>
  );
}
