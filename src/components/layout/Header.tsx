"use client";

import { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import clsx from "clsx";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "./LanguageToggle";
import { MobileNav } from "./MobileNav";

const sections = [
  { id: "work", key: "work" as const },
  { id: "about", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "experience", key: "experience" as const },
  { id: "contact", key: "contact" as const },
];

export function Header() {
  const { t } = useLocale();
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out",
        scrolled ? "bg-paper/85 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg text-ink">
          Yağmur Sügür
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {sections.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={clsx(
                "text-sm transition-colors duration-300",
                activeId === id ? "text-ink" : "text-zinc-600 hover:text-ink",
              )}
            >
              {t(dictionary.nav[key])}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LanguageToggle scope="desktop" />
        </div>

        <MobileNav sections={sections} activeId={activeId} />
      </Container>
    </header>
  );
}
