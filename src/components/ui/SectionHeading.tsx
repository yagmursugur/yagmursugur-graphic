import clsx from "clsx";
import { FadeIn } from "./FadeIn";

export function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  className,
}: {
  eyebrow?: string;
  heading: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <FadeIn className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className={clsx("font-display text-3xl text-ink sm:text-4xl", eyebrow && "mt-3")}>
        {heading}
      </h2>
    </FadeIn>
  );
}
