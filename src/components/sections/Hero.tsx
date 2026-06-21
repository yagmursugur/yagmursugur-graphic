"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { gentleTransition } from "@/lib/motion";
import { basePath } from "@/lib/site";

export function Hero() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion ? 0 : 16;

  return (
    <section id="top" className="relative flex min-h-[92vh] items-center pt-24">
      <Container className="flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: rise * 0.6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={gentleTransition}
          className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
        >
          {t(dictionary.hero.eyebrow)} · {t(profile.title)}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...gentleTransition, delay: reduceMotion ? 0 : 0.1 }}
          className="max-w-3xl font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...gentleTransition, delay: reduceMotion ? 0 : 0.22 }}
          className="max-w-md text-lg text-zinc-600"
        >
          {t(dictionary.hero.tagline)}
        </motion.p>

        <motion.a
          href="#work"
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...gentleTransition, delay: reduceMotion ? 0 : 0.34 }}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          {t(dictionary.hero.cta)}
          <span aria-hidden className="inline-block translate-y-px">
            ↓
          </span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: rise }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...gentleTransition, delay: reduceMotion ? 0 : 0.44 }}
          className="mt-1 flex items-center gap-3 text-xs text-zinc-500"
        >
          <a
            href={`${basePath}/cv/YagmurSugur-G2026TR.pdf`}
            download
            className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-ink"
          >
            <svg aria-hidden viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 1.5v8M8 9.5 5 6.5M8 9.5l3-3M2.5 11v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t(dictionary.hero.cvTr)}
          </a>
          <span aria-hidden className="text-zinc-300">
            ·
          </span>
          <a
            href={`${basePath}/cv/YagmurSugur-G2026EN.pdf`}
            download
            className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-ink"
          >
            <svg aria-hidden viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 1.5v8M8 9.5 5 6.5M8 9.5l3-3M2.5 11v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t(dictionary.hero.cvEn)}
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
