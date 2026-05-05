import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectDetailClient from "./ProjectDetailClient";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title + " | Alex Morgan",
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
