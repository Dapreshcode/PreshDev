import {
  ArrowUpRight,
  Code2,
  Globe2,
  ShoppingBag,
} from "lucide-react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Business & Company Websites",
    description:
      "Professional websites that give your business a strong digital presence, build credibility, and help potential customers understand what you offer.",
    examples: ["Company websites", "Business websites", "Landing pages"],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "E-commerce Solutions",
    description:
      "Custom online stores and ordering platforms designed to help businesses showcase products, accept orders, and grow their online sales.",
    examples: ["Online stores", "Food ordering", "Product catalogs"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Blogs & Content Platforms",
    description:
      "Modern content platforms designed to publish valuable content, grow an audience, and turn visitors into subscribers and potential customers.",
    examples: ["Blogs", "Content platforms", "Lead capture"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Custom Software",
    description:
      "Purpose-built software solutions designed around your business processes, helping you manage operations, automate workflows, and work more efficiently.",
    examples: ["Business systems", "Internal tools", "Custom applications"],
  },
];

export default function ServicesSection() {
  return (
    <Section>
      <Container>
        {/* Section heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            What We Build
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Digital solutions built around your business.
          </h2>

          <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
            From professional business websites to custom software, we build
            digital experiences designed around your goals and the people you
            want to reach. 
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface sm:p-8"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-medium text-text-muted">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-accent transition-transform duration-300 group-hover:rotate-6">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10 max-w-xl">
                  <h3 className="text-xl font-semibold text-text-primary sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Examples */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-border-subtle bg-background px-3 py-1.5 text-xs text-text-muted"
                    >
                      {example}
                    </span>
                  ))}
                </div>

                {/* Decorative arrow */}
                <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-background">
                  <ArrowUpRight size={18} />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}