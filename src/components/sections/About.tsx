"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { profile } from "@/data/profile";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <SectionHeading heading={t(dictionary.about.heading)} />

        <FadeIn delay={0.1} className="mt-8 max-w-2xl">
          <p className="text-lg leading-relaxed text-zinc-600">{t(profile.bio)}</p>
        </FadeIn>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <FadeIn delay={0.16}>
            <h3 className="font-display text-base text-ink">
              {t(dictionary.education.heading)}
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.education.map((entry) => (
                <li key={entry.id} className="text-sm text-zinc-600">
                  <p className="text-zinc-700">{t(entry.school)}</p>
                  <p>{t(entry.degree)}</p>
                  <p>{entry.years}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.22}>
            <h3 className="font-display text-base text-ink">
              {t(dictionary.languages.heading)}
            </h3>
            <ul className="mt-4 space-y-4">
              {profile.languages.map((lang) => (
                <li key={lang.name.en} className="text-sm text-zinc-600">
                  <p className="text-zinc-700">{t(lang.name)}</p>
                  <p>{t(lang.level)}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
