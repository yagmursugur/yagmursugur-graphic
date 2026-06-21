import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetailStack } from "@/components/sections/ProjectDetailStack";
import { projects } from "@/data/projects";
import { basePath, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const title = `${project.title.tr} — Yağmur Sügür`;
  const description = project.description.tr;
  const pageUrl = `${siteUrl}works/${project.slug}/`;
  const ogImage = `${siteUrl}${project.cover.src.slice(1)}`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "Yağmur Sügür",
      type: "article",
      locale: "tr_TR",
      images: [{ url: ogImage, width: project.cover.width, height: project.cover.height }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <header className="border-b border-zinc-200 py-5">
        <Container className="flex items-center justify-between">
          <Link href="/" className="font-display text-lg text-ink">
            Yağmur Sügür
          </Link>
          <Link href="/#work" className="text-sm text-zinc-600 transition-colors duration-200 hover:text-ink">
            ← Tüm işler
          </Link>
        </Container>
      </header>

      <main className="flex-1 py-12 sm:py-16">
        <Container className="max-w-3xl">
          <p className="text-xs uppercase tracking-wide text-accent">{project.category.tr}</p>
          <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{project.title.tr}</h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">{project.description.tr}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>

          <div
            className="relative mt-8 w-full overflow-hidden rounded-2xl"
            style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
          >
            <Image
              src={`${basePath}${project.cover.src}`}
              alt={project.cover.alt?.tr ?? project.title.tr}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-2 overflow-hidden rounded-2xl">
            <ProjectDetailStack details={project.details} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
