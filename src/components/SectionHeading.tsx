type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  underline?: boolean;
};

export function SectionHeading({ eyebrow, title, underline = false }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center lg:mb-24">
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-headline">{title}</h2>
      {underline ? <span className="mx-auto mt-3 block h-1 w-20 bg-gold" /> : null}
    </div>
  );
}
