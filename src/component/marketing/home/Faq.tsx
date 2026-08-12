"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

const faqs = [
  {
    question: "What types of websites and software do you build?",
    answer:
      "We build modern digital solutions tailored to different business needs, including business websites, company profile websites, e-commerce platforms, blogs and content platforms, real estate websites, and custom web applications.",
  },
  {
    question: "How much does a website or software project cost?",
    answer:
      "Project costs vary depending on the type of solution, number of pages, features, integrations, design requirements, and overall complexity. You can explore our starting prices or submit your project requirements to receive an estimated project cost based on your needs.",
  },
  {
    question: "How do I get an estimate for my project?",
    answer:
      "Start by telling us about your project through our project inquiry form. You'll provide information about the type of solution you need, the number of pages, features, and other requirements. We'll use this information to help determine an estimated project cost before confirming the final scope and quote.",
  },
  {
    question: "How do I pay for my project?",
    answer:
      "Depending on your project, you can choose a convenient payment option such as online payment or bank transfer. You can also contact us directly if you prefer to discuss another convenient payment method.",
  },
  {
    question: "Do I have to pay the full project cost upfront?",
    answer:
      "Payment arrangements depend on the scope and complexity of your project. Smaller projects may follow a simple payment structure, while larger projects can be divided into milestones. Your payment terms will be discussed and agreed upon before development begins.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on the scope and complexity of the work. A simple business website may take considerably less time than a custom e-commerce platform or software application. Once we understand your requirements, we'll provide a clearer estimated timeline.",
  },
  {
    question: "Can you help with hosting and launching my website?",
    answer:
      "Yes. We can assist with deploying your website and getting it live. Hosting, domain registration, email configuration, and ongoing maintenance can also be discussed based on your project requirements.",
  },
  {
    question: "What happens after I submit the project form?",
    answer:
      "We'll review the information you provide to understand your project requirements. If the project is a good fit, we'll discuss the scope, functionality, estimated timeline, and next steps before development begins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section>
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Questions before we get started?
          </h2>

          <p className="mt-5 text-base leading-8 text-text-muted sm:text-lg">
            Here are answers to some common questions about building and
            launching your digital solution with Presh Dev.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-border-subtle bg-surface/30">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-border-subtle last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-colors hover:bg-surface/50 sm:px-8"
                >
                  <span className="text-base font-semibold text-text-primary sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-subtle text-text-muted transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-accent/30 text-accent"
                        : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl px-6 pb-6 text-sm leading-7 text-text-muted sm:px-8 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}