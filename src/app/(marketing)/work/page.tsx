
import Image from "next/image";
import Container from "@/component/ui/container";
import Section from "@/component/ui/section";
import { projects } from "@/data/project";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  const sortedProjects = [...projects].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <main>
      {/* Page Hero */}
      <Section>
        <Container>
          <div className="w-full h-full relative">
           

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Our Work
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Digital experiences built with purpose.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
              Explore a selection of websites, digital platforms, and software
              solutions designed and developed by Presh Dev.
            </p>
          </div>
         
          </div>
          
        </Container>
      </Section>

      {/* Project Grid */}
      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {sortedProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-3xl border border-border-subtle bg-surface/40"
              >
                {/* Image placeholder */}
               <div className="relative aspect-[16/10] overflow-hidden bg-surface">
  <Image
    src={project.thumbnail}
    alt={`${project.title} project preview`}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
   className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
  />

  {project.status === "in-progress" && (
    <span className="absolute left-5 top-5 rounded-full border border-accent/20 bg-background/80 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-sm">
      In Progress
    </span>
  )}
</div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.category}
                    </span>

                    <span className="text-xs text-text-muted">
                      {project.industry}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-text-primary">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-text-muted">
                    {project.shortDescription}
                  </p>

                  <div className="mt-6">
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary transition-colors hover:text-accent"
                    >
                      View case study
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}