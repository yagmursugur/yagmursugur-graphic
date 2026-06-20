"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { basePath } from "@/lib/site";
import { Tag } from "@/components/ui/Tag";
import { ProjectDetailStack } from "./ProjectDetailStack";
import type { Project } from "@/types/content";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t(project.title)}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 my-8 w-full max-w-3xl overflow-hidden rounded-2xl bg-paper shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={t(dictionary.gallery.collapseHint)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-ink shadow-sm transition-transform duration-150 ease-out active:scale-90"
            >
              <span aria-hidden>✕</span>
            </button>

            <div
              className="relative w-full"
              style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
            >
              <Image
                src={`${basePath}${project.cover.src}`}
                alt={project.cover.alt ? t(project.cover.alt) : t(project.title)}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="px-6 py-6">
              <h3 className="font-display text-2xl text-ink">{t(project.title)}</h3>
              <p className="mt-1 text-sm text-zinc-600">{t(project.category)}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {t(project.description)}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </div>

            <ProjectDetailStack details={project.details} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
