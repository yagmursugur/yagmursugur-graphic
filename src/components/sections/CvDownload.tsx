"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";
import { basePath } from "@/lib/site";

export function CvDownload() {
  const { t } = useLocale();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading heading={t(dictionary.cv.heading)} align="center" />

        <FadeIn delay={0.1} className="mx-auto mt-6 max-w-md text-center">
          <p className="text-zinc-600">{t(dictionary.cv.body)}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`${basePath}/cv/YagmurSugur-G2026TR.pdf`} download>
              {t(dictionary.cv.downloadTr)}
            </Button>
            <Button href={`${basePath}/cv/YagmurSugur-G2026EN.pdf`} download variant="ghost">
              {t(dictionary.cv.downloadEn)}
            </Button>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-sm text-zinc-600 underline-offset-4 hover:text-ink hover:underline"
          >
            {profile.email}
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
