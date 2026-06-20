import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleContext";
import type { ImageAsset } from "@/types/content";

export function ProjectDetailStack({ details }: { details: ImageAsset[] }) {
  const { t } = useLocale();

  return (
    <div className="flex flex-col">
      {details.map((image) => (
        <div key={image.src} className="relative w-full" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
          <Image
            src={image.src}
            alt={image.alt ? t(image.alt) : ""}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
