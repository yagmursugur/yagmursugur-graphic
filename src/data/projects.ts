import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "noirel",
    slug: "noirel",
    title: { tr: "Noirel", en: "Noirel" },
    category: { tr: "Marka Kimliği & Ambalaj", en: "Brand Identity & Packaging" },
    description: {
      tr: "Noirel, kontrast ve yoğunluk üzerine kurulu bir niş parfüm markası. Gölgenin zarafetinden ve sadeliğin sessiz gücünden ilham alan kimlik; gizem, rafinelik ve zamansız bir sofistike duruş hissi yaratmayı amaçlıyor.",
      en: "Noirel is a niche perfume brand built on contrast and depth. Inspired by the elegance of shadow and the quiet power of simplicity, the identity aims to feel mysterious, refined, and timelessly sophisticated.",
    },
    year: 2026,
    cover: {
      src: "/images/projects/noirel/cover.jpg",
      width: 1600,
      height: 1200,
      alt: { tr: "Noirel marka kimliği kapağı", en: "Noirel brand identity cover" },
    },
    details: [
      {
        src: "/images/projects/noirel/1.jpg",
        width: 2000,
        height: 1415,
        alt: { tr: "Noirel marka kimliği ve ambalaj", en: "Noirel brand identity and packaging" },
      },
      {
        src: "/images/projects/noirel/2.jpg",
        width: 2000,
        height: 1415,
        alt: { tr: "Noirel logo konstrüksiyonu", en: "Noirel logo construction" },
      },
      {
        src: "/images/projects/noirel/3.jpg",
        width: 2000,
        height: 1415,
        alt: { tr: "Noirel görsel kimlik detayı", en: "Noirel visual identity detail" },
      },
      {
        src: "/images/projects/noirel/4.jpg",
        width: 2000,
        height: 1333,
        alt: { tr: "Noirel ambalaj uygulaması", en: "Noirel packaging application" },
      },
    ],
  },
];
