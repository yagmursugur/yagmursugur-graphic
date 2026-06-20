import type { LocalizedString } from "@/types/content";

export const dictionary = {
  nav: {
    about: { tr: "Hakkımda", en: "About" },
    skills: { tr: "Yetenekler", en: "Skills" },
    experience: { tr: "Deneyim", en: "Experience" },
    work: { tr: "İşler", en: "Work" },
    contact: { tr: "İletişim", en: "Contact" },
  },
  hero: {
    eyebrow: { tr: "Portfolyo", en: "Portfolio" },
    tagline: {
      tr: "Sakin bir çizgide, anlamlı görsel hikâyeler tasarlıyorum.",
      en: "Designing quiet, meaningful visual stories.",
    },
    cta: { tr: "İşlere göz at", en: "See the work" },
  },
  about: {
    heading: { tr: "Merhaba, ben Yağmur", en: "Hi, I'm Yağmur" },
  },
  skills: {
    heading: { tr: "Neyle çalışıyorum", en: "What I work with" },
  },
  experience: {
    heading: { tr: "Yolculuğum", en: "My journey" },
  },
  education: {
    heading: { tr: "Eğitim", en: "Education" },
  },
  languages: {
    heading: { tr: "Diller", en: "Languages" },
  },
  gallery: {
    eyebrow: { tr: "İşler", en: "Work" },
    heading: { tr: "Seçilmiş çalışmalar", en: "Selected work" },
    expandHint: { tr: "Görmek için dokun", en: "Tap to view" },
    collapseHint: { tr: "Kapatmak için dokun", en: "Tap to close" },
  },
  cv: {
    heading: { tr: "Birlikte çalışalım", en: "Let's work together" },
    body: {
      tr: "CV'mi indirebilir ya da doğrudan e-posta ile ulaşabilirsiniz.",
      en: "Download my CV or reach out directly by email.",
    },
    downloadTr: { tr: "Türkçe CV indir", en: "Download CV (Turkish)" },
    downloadEn: { tr: "İngilizce CV indir", en: "Download CV (English)" },
    emailCta: { tr: "E-posta gönder", en: "Send an email" },
  },
  footer: {
    rights: { tr: "Tüm hakları saklıdır.", en: "All rights reserved." },
    backToTop: { tr: "Yukarı çık", en: "Back to top" },
  },
} as const satisfies Record<string, Record<string, LocalizedString>>;

export type DictionarySection = keyof typeof dictionary;
