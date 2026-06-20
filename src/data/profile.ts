import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "Yağmur Sügür",
  title: {
    tr: "Grafik Tasarımcı",
    en: "Graphic Designer",
  },
  location: "Bursa, Türkiye",
  email: "yagmur.sugur13@gmail.com",
  bio: {
    tr: "Grafik tasarım ve görsel iletişim alanında; sosyal medya tasarımları, afiş, broşür, katalog, baskı materyalleri ve dijital içerikler üzerine çalışıyorum. Adobe Photoshop, Adobe Illustrator ve Figma kullanarak marka diliyle uyumlu, estetik ve işlevsel tasarımlar üretmeye odaklanıyorum. Görsel hiyerarşi, tipografi, layout ve renk kullanımına dikkat ederek dijital ve basılı mecralara uygun tasarım çıktıları hazırlıyorum.",
    en: "I'm a graphic designer working in visual communication, social media content, posters, brochures, catalogues, print materials, and digital assets. I design with Adobe Photoshop, Illustrator, and Figma, focusing on aesthetics and function that align with each brand's visual language. I pay close attention to visual hierarchy, typography, layout, and color to deliver outputs that work across both digital and print.",
  },
  education: [
    {
      id: "marmara",
      school: {
        tr: "Marmara Üniversitesi, Güzel Sanatlar Fakültesi",
        en: "Marmara University, Faculty of Fine Arts",
      },
      degree: {
        tr: "Lisans, Endüstriyel Tasarım",
        en: "B.A. in Industrial Design",
      },
      years: "2016 - 2020",
      location: {
        tr: "İstanbul, Türkiye",
        en: "İstanbul, Türkiye",
      },
    },
    {
      id: "zeki-muren",
      school: {
        tr: "Zeki Müren Güzel Sanatlar Lisesi",
        en: "Zeki Müren Fine Arts High School",
      },
      degree: {
        tr: "Resim",
        en: "Visual Arts",
      },
      years: "2012 - 2015",
      location: {
        tr: "Bursa, Türkiye",
        en: "Bursa, Türkiye",
      },
    },
  ],
  languages: [
    {
      name: { tr: "İngilizce", en: "English" },
      level: { tr: "Orta Seviye (B1)", en: "Intermediate (B1)" },
    },
  ],
};
