"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { cardCollapseTransition, cardExpandTransition, pressTransition } from "@/lib/motion";
import { ProjectDetailStack } from "./ProjectDetailStack";
import { basePath } from "@/lib/site";
import type { Project } from "@/types/content";

export function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { t } = useLocale();

  return (
    <motion.div
      layout
      transition={expanded ? cardExpandTransition : cardCollapseTransition}
      className="overflow-hidden rounded-2xl border border-zinc-200 bg-white/60"
    >
      <motion.button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        whileTap={{ scale: 0.985 }}
        transition={pressTransition}
        className="group block w-full text-left"
      >
        <div
          className="relative w-full"
          style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
        >
          <Image
            src={`${basePath}${project.cover.src}`}
            alt={project.cover.alt ? t(project.cover.alt) : t(project.title)}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            priority
          />
        </div>

        <div className="flex items-start justify-between gap-4 px-6 py-5">
          <div>
            <h3 className="font-display text-xl text-ink">{t(project.title)}</h3>
            <p className="mt-1 text-sm text-zinc-600">{t(project.category)}</p>
          </div>
          <span className="mt-1 shrink-0 text-xs uppercase tracking-wide text-accent">
            {expanded ? t(dictionary.gallery.collapseHint) : t(dictionary.gallery.expandHint)}
          </span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={expanded ? { duration: 0.3, delay: 0.1 } : { duration: 0.15 }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-zinc-600">
              {t(project.description)}
            </p>
            <ProjectDetailStack details={project.details} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
