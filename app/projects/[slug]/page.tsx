import { researches } from "@/lib/data";
import { notFound } from "next/navigation";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return researches.map((r) => ({ slug: r.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = researches.find((r) => r.slug === slug);
  if (!project) notFound();
  return <ProjectContent slug={slug} />;
}
