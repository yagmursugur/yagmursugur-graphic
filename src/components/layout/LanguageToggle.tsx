"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { gentleTransition, pressTransition } from "@/lib/motion";

export function LanguageToggle({
  className,
  scope = "default",
}: {
  className?: string;
  scope?: string;
}) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={clsx(
        "relative inline-flex items-center rounded-full border border-zinc-300/70 bg-zinc-50/60 p-1 text-xs font-medium",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {(["tr", "en"] as const).map((value) => (
        <motion.button
          key={value}
          type="button"
          onClick={() => setLocale(value)}
          aria-pressed={locale === value}
          whileTap={{ scale: 0.95 }}
          transition={pressTransition}
          className={clsx(
            "relative z-10 rounded-full px-3 py-1.5 uppercase tracking-wide transition-colors duration-200 ease-out",
            locale === value ? "text-paper" : "text-zinc-600 hover:text-ink",
          )}
        >
          {locale === value && (
            <motion.span
              layoutId={`locale-pill-${scope}`}
              transition={gentleTransition}
              className="absolute inset-0 -z-10 rounded-full bg-ink"
            />
          )}
          {value}
        </motion.button>
      ))}
    </div>
  );
}
