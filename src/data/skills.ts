import type { SkillGroup } from "@/types/content";

const tool = (name: string) => ({ tr: name, en: name });

export const skillGroups: SkillGroup[] = [
  {
    id: "tools",
    label: { tr: "Tasarım Araçları", en: "Design Tools" },
    level: { tr: "Uzman", en: "Expert" },
    items: [tool("Adobe Photoshop"), tool("Adobe Illustrator"), tool("Figma")],
  },
  {
    id: "graphic-design",
    label: { tr: "Grafik Tasarım", en: "Graphic Design" },
    level: { tr: "Uzman", en: "Expert" },
    items: [
      { tr: "Sosyal Medya Tasarımı", en: "Social Media Design" },
      { tr: "Afiş Tasarımı", en: "Poster Design" },
      { tr: "Broşür Tasarımı", en: "Brochure Design" },
      { tr: "Katalog Tasarımı", en: "Catalogue Design" },
      { tr: "Baskı Tasarımı", en: "Print Design" },
    ],
  },
  {
    id: "brand",
    label: { tr: "Marka ve Görsel İletişim", en: "Brand & Visual Communication" },
    level: { tr: "İleri", en: "Proficient" },
    items: [
      { tr: "Kurumsal Kimlik Tasarımı", en: "Corporate Identity" },
      { tr: "Marka Kimliği", en: "Brand Identity" },
      { tr: "Görsel İletişim", en: "Visual Communication" },
      { tr: "Tipografi", en: "Typography" },
      { tr: "Layout Tasarımı", en: "Layout Design" },
    ],
  },
  {
    id: "ai-tools",
    label: { tr: "Yapay Zeka Araçları", en: "AI & Productivity Tools" },
    level: { tr: "İleri", en: "Proficient" },
    items: [tool("ChatGPT"), tool("Claude"), tool("Codex"), tool("Figma Make")],
  },
];
