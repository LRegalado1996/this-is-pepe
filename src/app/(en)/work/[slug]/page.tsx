/**
 * Case study page (English), statically generated per project.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projectSlugs } from "@/content/projects";
import { buildProjectMetadata } from "@/lib/seo/config";
import { CaseStudyView } from "@/views/case-study-view";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export const generateStaticParams = () => projectSlugs.map((slug) => ({ slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug, "en");
  return project ? buildProjectMetadata(project, "en") : {};
}

export default async function Page({ params }: Props) {
  const project = getProject((await params).slug, "en");
  if (!project) notFound();

  return <CaseStudyView project={project} locale="en" />;
}
