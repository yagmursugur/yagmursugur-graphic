"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

export function Skills() {
  const { t } = useLocale();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <Container>
        <SectionHeading heading={t(dictionary.skills.heading)} />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.id} delay={index * 0.06}>
              <div className="flex items-baseline justify-between gap-4 border-b border-zinc-200 pb-3">
                <h3 className="font-display text-lg text-ink">{t(group.label)}</h3>
                <span className="text-xs uppercase tracking-wide text-accent">
                  {t(group.level)}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item.en}>{t(item)}</Tag>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
