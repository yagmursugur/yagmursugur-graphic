"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { LanguageToggle } from "./LanguageToggle";
import { pressTransition } from "@/lib/motion";

type NavSection = { id: string; key: keyof typeof dictionary.nav };

const hamburgerEase = [0.45, 0, 0.2, 1] as const;

export function MobileNav({
  sections,
  activeId,
}: {
  sections: NavSection[];
  activeId: string;
}) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  return (
    <div className="md:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Menu"
        whileTap={{ scale: 0.92 }}
        transition={pressTransition}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <motion.span
          className="h-px w-5 bg-ink"
          animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }}
          transition={{ duration: 0.25, ease: hamburgerEase }}
        />
        <motion.span
          className="h-px w-5 bg-ink"
          animate={{ rotate: open ? -45 : 0, y: open ? -4 : 0 }}
          transition={{ duration: 0.25, ease: hamburgerEase }}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={open ? { duration: 0.25, ease: "easeOut" } : { duration: 0.15 }}
            className="absolute inset-x-0 top-full border-t border-zinc-200 bg-paper px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {sections.map(({ id, key }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "text-base transition-colors duration-200",
                    activeId === id ? "text-ink" : "text-zinc-600",
                  )}
                >
                  {t(dictionary.nav[key])}
                </a>
              ))}
            </nav>
            <LanguageToggle className="mt-6" scope="mobile" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
