
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";
import { projects } from "@/data/project";

export default function FeaturedWork() {
  const featuredProjects = projects.filter((project) => project.featured)
    .sort((a, b) => a.priority - b.priority);

  return (
    <Section className="bg-surface/30">
      <Container>
        {/* Section heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Selected Work
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              A look at what we can build.
            </h2>

            <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
              Explore a selection of digital experiences and solutions
              designed and developed for different business goals.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent"
          >
            View all work
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Projects */}
        <div className="mt-16 space-y-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-3xl border border-border-subtle bg-background"
            >
              <div className="grid lg:grid-cols-2">
                {/* Project image placeholder */}
             {/* Project image */}
<div className="relative min-h-[320px] overflow-hidden bg-surface sm:min-h-[420px]">
  {/* Soft visual background */}
 <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />

  <Image
    src={project.heroImage}
    alt={`${project.title} project preview`}
    fill
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.02] sm:p-8"
  />

  {/* Project number */}
  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle bg-background/80 text-xs font-medium text-text-primary backdrop-blur-sm">
    {String(index + 1).padStart(2, "0")}
  </div>
</div>

                {/* Project information */}
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent">
                        {project.category}
                      </span>

                      <span className="text-xs text-text-muted">
                        {project.industry}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                      {project.title}
                    </h3>

                   <p className="mt-4 text-base leading-8 text-text-muted sm:text-lg">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mt-7 flex flex-wrap gap-2">
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

                  {/* CTA */}
                  <div className="mt-10">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent"
                    >
                      View project
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}