"use client";

import { Check } from "lucide-react";
import { useProjectWizard } from "@/hooks/useProjectWizard";
import type { LogoOption } from "@/generated/prisma/client";

const logoOptions: {
  value: LogoOption;
  label: string;
  description: string;
}[] = [
  {
    value: "HAVE_LOGO",
    label: "I already have a logo",
    description:
      "I will provide my existing logo for the website.",
  },
  {
    value: "NEED_LOGO",
    label: "I need a logo",
    description:
      "I would like Presh Dev to create a logo for my business.",
  },
  {
    value: "NO_LOGO",
    label: "I don't need a logo",
    description:
      "I don't need logo design as part of this project.",
  },
];

export default function StepAdditionalRequirements() {
  const { data, updateField } = useProjectWizard();

  return (
    <div className="space-y-10">
      {/* Logo */}
      <section>
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-text-primary">
            Do you already have a logo?
          </h3>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            Let us know whether you already have a logo or would
            like us to create one for you.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {logoOptions.map((option) => {
            const selected =
              data.logoOption === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  updateField("logoOption", option.value)
                }
                className={`rounded-2xl border p-5 text-left transition-all ${
                  selected
                    ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                    : "border-border bg-surface hover:border-accent/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-text-primary">
                      {option.label}
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-text-muted">
                      {option.description}
                    </p>
                  </div>

                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                      selected
                        ? "border-accent bg-accent text-background"
                        : "border-border"
                    }`}
                  >
                    {selected && <Check size={14} />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Additional requirements */}
      <section>
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-text-primary">
            Is there anything else we should know?
          </h3>

          <p className="mt-1 text-sm leading-6 text-text-muted">
            Tell us about anything else you would like included
            in the project.
          </p>
        </div>

        <textarea
          value={data.additionalRequirements}
          onChange={(event) =>
            updateField(
              "additionalRequirements",
              event.target.value
            )
          }
          rows={7}
          placeholder="Tell us anything else that would help us understand your project..."
          className="w-full resize-y rounded-2xl border border-border bg-surface px-4 py-4 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />

        <p className="mt-2 text-xs text-text-muted">
          This field is optional.
        </p>
      </section>
    </div>
  );
}