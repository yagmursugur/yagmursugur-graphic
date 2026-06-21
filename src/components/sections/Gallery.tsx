"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "@/data/projects";

const HASH_PREFIX = "#project-";

export function Gallery() {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = projects.find((project) => project.slug === openId) ?? null;

  useEffect(() => {
    const slug = window.location.hash.replace(HASH_PREFIX, "");
    if (slug && projects.some((project) => project.slug === slug)) {
      // Deliberate one-time sync from the URL hash after mount: the server
      // has no access to it, so reading it during render would mismatch
      // hydration. This has to happen in an effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpenId(slug);
    }
  }, []);

  const openProjectModal = (slug: string) => {
    setOpenId(slug);
    window.history.replaceState(null, "", `${HASH_PREFIX}${slug}`);
  };

  const closeProjectModal = () => {
    setOpenId(null);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#work`);
  };

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
              <ProjectCard project={project} onOpen={() => openProjectModal(project.slug)} />
            </FadeIn>
          ))}
        </div>
      </Container>

      <ProjectModal project={openProject} onClose={closeProjectModal} />
    </section>
  );
}
