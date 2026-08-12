"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";
import { projects } from "@/data/project";

const benefits = [
  "Professional, responsive websites",
  "Built around your business goals",
  "Modern technology and scalable solutions",
];

const heroProjects = projects
  .filter((project) => project.heroShowcase)
  .sort((a, b) => a.priority - b.priority);

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = heroProjects[activeIndex];

  useEffect(() => {
    if (heroProjects.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === heroProjects.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? heroProjects.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === heroProjects.length - 1 ? 0 : current + 1
    );
  };

  return (
    <Section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Content */}
          <div>
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />

              <span className="text-sm font-medium text-yellow-300">
                Digital solutions for growing businesses
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl lg:text-7xl">
              Your business deserves a{" "}
              <span className="text-accent">digital presence</span> that works
              for you.
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg md:text-xl leading-8 text-text-muted sm:text-2xl">
              We design and develop modern websites and software solutions that
              help businesses build credibility, reach more customers, and
              grow online.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/start-project"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-accent-hover"
              >
                Start Your Project

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-7 py-3.5 text-sm font-semibold text-text-primary transition-all duration-200 hover:border-accent hover:text-accent"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Benefits */}
            <div className="mt-10 space-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-text-muted"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-accent"
                  />

                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          {/* Project Showcase */}
<div className="relative">
  <div className="relative mx-auto w-full max-w-xl">
    {/* Abstract background */}
    <div
      aria-hidden="true"
      className="absolute -inset-6 rounded-[2rem] bg-accent/5 blur-3xl"
    />

    {/* Main project frame */}
    <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface/70 shadow-2xl backdrop-blur-sm">
      {/* Image */}
      <div className="relative aspect-[4/3]">
        <Image
          key={activeProject.slug}
          src={activeProject.heroImage}
          alt={`${activeProject.title} project preview`}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-contain p-4 sm:p-6"
        />

        {/* Soft overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />

        {/* Project number */}
        <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/70 text-xs font-medium text-white backdrop-blur-md">
          {String(activeIndex + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Project information */}
      <div className="border-t border-border-subtle bg-background/60 p-5 backdrop-blur-md sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {activeProject.category}
            </p>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
              {activeProject.title}
            </h2>
          </div>

          <Link
            href={`/work/${activeProject.slug}`}
            aria-label={`View ${activeProject.title} project`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-surface transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <p className="mt-3 text-sm leading-6 text-text-muted">
          {activeProject.shortDescription}
        </p>

        {/* Controls */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {heroProjects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title}`}
                aria-current={activeIndex === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-accent"
                    : "w-1.5 bg-text-muted/30 hover:bg-text-muted/60"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Floating badge */}
    <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-surface-elevated p-4 shadow-xl backdrop-blur-md sm:-left-8">
      <p className="text-xs text-text-muted">Featured project</p>

      <p className="mt-1 text-sm font-semibold text-text-primary">
        Built by Presh Dev
      </p>
    </div>
  </div>
</div>
        </div>
      </Container>
    </Section>
  );
}