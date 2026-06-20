"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";
import { dictionary } from "@/lib/i18n/dictionary";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 py-10">
      <Container className="flex flex-col items-center gap-4 text-sm text-zinc-600 sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}. {t(dictionary.footer.rights)}
        </p>
        <a href="#top" className="transition-colors duration-300 hover:text-ink">
          {t(dictionary.footer.backToTop)}
        </a>
      </Container>
    </footer>
  );
}
