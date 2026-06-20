# yagmursugur-graphic

Tek sayfalık (single-page) portfolyo sitesi — Yağmur Sügür, grafik tasarımcı. Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.

## Stack ve yapı

- `src/app/page.tsx` — tüm anasayfa bölümlerini sırayla birleştirir (Hero, About, Skills, Experience, Gallery, CvDownload).
- `src/data/*.ts` — içerik (profil, deneyim, beceriler, projeler) tipli sabitler olarak burada tutulur, ayrı bir CMS/backend yok.
- `src/types/content.ts` — `LocalizedString = { tr, en }` tüm iki dilli alanların temel tipi.
- `src/lib/i18n/` — hafif özel i18n: `LocaleContext` (TR/EN, localStorage'a persist) + `dictionary.ts` (UI metinleri). URL bazlı locale routing yok, tüm site anlık dil değiştirir.
- `src/lib/motion.ts` — paylaşılan "naif/yumuşak" animasyon ayarları (easing/duration). Yeni animasyon eklerken buradaki değerleri kullan, her bileşende yeniden icat etme.
- `src/components/ui/FadeIn.tsx` — scroll'da yumuşak fade+rise animasyonunun tek kaynağı; tüm bölümler bunu kullanır.
- `src/components/sections/Gallery.tsx` + `ProjectCard.tsx` — galeri kartı kapağa tıklanınca **sayfa içinde yerinde genişler** (Framer Motion `layout`), ayrı bir modal/route'a gitmez. Yeni proje eklemek için `src/data/projects.ts`'e yeni bir obje eklemek yeterli.

## Görseller

- Ham (upscaled, 4-6.5MB) PNG'ler `assets-raw/` altında tutulur ve **commit edilmez** (`.gitignore`'da). Sadece `scripts/optimize-images.mjs` (sharp) ile optimize edilmiş `.jpg` çıktıları `public/images/projects/<slug>/` altına gider.
- Yeni proje eklerken: orijinalleri `assets-raw/<slug>/` içine koy (kapak dosyası `kapak.png` olmalı), `node scripts/optimize-images.mjs` çalıştır, çıkan width/height değerlerini `src/data/projects.ts`'teki ilgili `Project` objesine işle.
- Tüm görseller `next/image` ile render edilir.

## CV

İki dilde CV PDF'i `public/cv/` altında durur, `CvDownload.tsx` bölümünden indirilir. Yeni CV versiyonu geldiğinde aynı dosya adlarıyla üzerine yazılabilir.

## Tasarım/UX cilası — bu projede kullanılan skill sırası

Bu sitenin görsel kalitesi şu üç skill ile şekillendirildi/denetlendi, gelecekte büyük bir görsel/UX değişikliği yapılacaksa aynı sırayı izle:

1. **`/design-taste-frontend`** — genel görsel yön (tipografi, palet, spacing, anti-generic layout kararları). Yeni bir bölüm veya büyük bir redesign eklenecekse önce bu.
2. **`/emil-design-eng`** — animasyon/mikro-etkileşim cilası (easing, timing, hover/press durumları, geçiş hissi). Etkileşimli bir bileşen eklendiğinde/değiştiğinde bu.
3. **`/impeccable`** — final UX/erişilebilirlik/responsive denetimi, teslimden önce son adım.

Site nazik/naif, modern ve minimal bir his vermeli; animasyonlar yumuşak olmalı (sıçramasız, abartısız) — bu beklenti `src/lib/motion.ts`'teki ortak ayarlarla korunuyor.

## Komutlar

- `npm run dev` — geliştirme sunucusu
- `npm run build` — production build
- `node scripts/optimize-images.mjs` — yeni ham görselleri optimize eder
