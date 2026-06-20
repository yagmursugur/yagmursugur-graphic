"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { FadeIn } from "@/components/ui/FadeIn";
import type { ExperienceEntry } from "@/types/content";

export function ExperienceItem({
  entry,
  delay = 0,
  isLast = false,
}: {
  entry: ExperienceEntry;
  delay?: number;
  isLast?: boolean;
}) {
  const { t } = useLocale();

  return (
    <FadeIn delay={delay} className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden />
      {!isLast && (
        <span
          className="absolute left-[3px] top-4 bottom-[-2.5rem] w-px bg-zinc-200"
          aria-hidden
        />
      )}

      <p className="text-xs uppercase tracking-wide text-zinc-600">{t(entry.period)}</p>
      <h3 className="mt-2 font-display text-xl text-ink">{t(entry.role)}</h3>
      <p className="text-sm text-zinc-600">
        {t(entry.company)} · {t(entry.location)}
      </p>

      <ul className="mt-4 space-y-2">
        {entry.bullets.map((bullet) => (
          <li key={bullet.en} className="text-sm leading-relaxed text-zinc-600">
            {t(bullet)}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}
