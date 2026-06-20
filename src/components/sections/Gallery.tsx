"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/projects";

export function Gallery() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = projects.find((project) => project.id === openId) ?? null;

  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t(dictionary.gallery.eyebrow)}
          heading={t(dictionary.gallery.heading)}
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.08}
              className={projects.length === 1 ? "sm:col-span-2" : undefined}
            >
              <ProjectCard project={project} onOpen={() => setOpenId(project.id)} />
            </FadeIn>
          ))}
        </div>
      </Container>

      <ProjectModal project={openProject} onClose={() => setOpenId(null)} />
    </section>
  );
}
