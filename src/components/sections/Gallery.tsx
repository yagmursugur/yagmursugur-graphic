"use client";

import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Gallery() {
  const { t } = useLocale();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t(dictionary.gallery.eyebrow)}
          heading={t(dictionary.gallery.heading)}
        />

        <LayoutGroup>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn
                key={project.id}
                delay={index * 0.08}
                className={projects.length === 1 ? "sm:col-span-2" : undefined}
              >
                <ProjectCard
                  project={project}
                  expanded={expandedId === project.id}
                  onToggle={() =>
                    setExpandedId((current) => (current === project.id ? null : project.id))
                  }
                />
              </FadeIn>
            ))}
          </div>
        </LayoutGroup>
      </Container>
    </section>
  );
}
