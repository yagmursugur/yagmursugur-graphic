import clsx from "clsx";

export function Tag({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-sm text-zinc-600",
        className,
      )}
    >
      {children}
    </span>
  );
}
