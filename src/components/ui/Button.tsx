import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.97]",
        variant === "primary" &&
          "bg-ink text-paper hover:bg-zinc-700",
        variant === "ghost" &&
          "border border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-100",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
