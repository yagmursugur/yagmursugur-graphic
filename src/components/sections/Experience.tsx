"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceItem } from "./ExperienceItem";
import { experience } from "@/data/experience";

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading heading={t(dictionary.experience.heading)} />

        <div className="mt-12 max-w-2xl space-y-12">
          {experience.map((entry, index) => (
            <ExperienceItem
              key={entry.id}
              entry={entry}
              delay={index * 0.08}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
