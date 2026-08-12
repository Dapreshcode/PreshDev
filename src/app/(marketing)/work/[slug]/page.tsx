


import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";
import { projects } from "@/data/project";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Header */}
      <Section>
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to work
          </Link>

          <div className="mt-12 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent">
                {project.category}
              </span>

              <span className="text-sm text-text-muted">
                {project.industry}
              </span>

              {project.status === "in-progress" && (
                <span className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted">
                  In Progress
                </span>
              )}
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-muted">
              {project.description}
            </p>

            {project.liveUrl && (
              <div className="mt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                >
                  Visit live project
                  <ArrowUpRight size={17} />
                </a>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Hero Image Placeholder */}
      {/* Hero Image */}
<Section className="pt-0">
  <Container>
    <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface">
      {/* Soft glass layer */}
      <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" />

      {/* Project image */}
      <div className="relative aspect-[16/9]">
        <Image
          src={project.heroImage}
          alt={`${project.title} project preview`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover p-4 sm:p-8 lg:p-12"
        />
      </div>
    </div>
  </Container>
</Section>

      {/* Project Overview */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
            {/* Case Study */}
            <div>
              {project.caseStudy && (
                <div className="space-y-12">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      The Challenge
                    </p>

                    <p className="mt-4 text-base leading-8 text-text-muted">
                      {project.caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      The Solution
                    </p>

                    <p className="mt-4 text-base leading-8 text-text-muted">
                      {project.caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      The Outcome
                    </p>

                    <p className="mt-4 text-base leading-8 text-text-muted">
                      {project.caseStudy.outcome}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <aside className="h-fit rounded-2xl border border-border-subtle bg-surface/40 p-6">
              <h2 className="text-sm font-semibold text-text-primary">
                Project Details
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Services
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="text-sm text-text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Technologies
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border-subtle px-3 py-1.5 text-xs text-text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
   
   {/* Project Showcase */}
{project.screenshots && project.screenshots.length > 0 && (
  <Section>
    <Container>
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Project Showcase
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          A closer look at the experience.
        </h2>

        <p className="mt-4 text-base leading-8 text-text-muted">
          Explore some of the key experiences and interfaces designed and
          developed for this project.
        </p>
      </div>

      <div className="mt-12 space-y-16">
        {project.screenshots.map((screenshot, index) => (
          <figure key={screenshot.src}>
            <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface">
              <div className="relative aspect-[16/10]">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-contain p-4 sm:p-8 lg:p-12"
                />
              </div>
            </div>

            {screenshot.caption && (
              <figcaption className="mt-5 max-w-2xl text-md leading-7 text-text-muted">
                <span className="mr-2 font-medium text-text-primary">
                  0{index + 1}.
                </span>

                {screenshot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Container>
  </Section>
)}


      {/* CTA */}
      <Section>
        <Container>
          <div className="rounded-3xl border border-border-subtle bg-surface/40 p-8 text-center sm:p-12 lg:p-16">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-text-muted">
              Tell us what you want to build and let&apos;s explore how we can
              turn your idea into a digital solution.
            </p>

            <div className="mt-8">
              <Link
                href="/start-project"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Start your project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}