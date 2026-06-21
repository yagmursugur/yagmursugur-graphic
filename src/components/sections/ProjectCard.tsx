"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { pressTransition } from "@/lib/motion";
import { basePath } from "@/lib/site";
import type { Project } from "@/types/content";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const { t } = useLocale();

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileTap={{ scale: 0.985 }}
      transition={pressTransition}
      className="group block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white/60 text-left"
    >
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={`${basePath}${project.cover.src}`}
          alt={project.cover.alt ? t(project.cover.alt) : t(project.title)}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
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
          {t(dictionary.gallery.expandHint)}
        </span>
      </div>
    </motion.button>
  );
}
