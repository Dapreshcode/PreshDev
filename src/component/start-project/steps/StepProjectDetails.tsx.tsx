"use client";

import { useProjectWizard } from "@/hooks/useProjectWizard";

export default function StepProjectDetails() {
  const { data, updateField } = useProjectWizard();

  return (
    <div className="space-y-8">
      {/* Project Name */}
      <div className="space-y-2">
        <label
          htmlFor="projectName"
          className="text-sm font-medium text-text-primary"
        >
          Project Name
        </label>

        <p className="text-sm text-text-muted">
          Give this project a name that helps us identify it.
        </p>

        <input
          id="projectName"
          type="text"
          value={data.projectName}
          onChange={(event) =>
            updateField("projectName", event.target.value)
          }
          placeholder="e.g. Presh Dev Business Website"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label
          htmlFor="projectDescription"
          className="text-sm font-medium text-text-primary"
        >
          Tell us about the project
        </label>

        <p className="text-sm text-text-muted">
          Describe what you want the website to do and what you
          would like us to build.
        </p>

        <textarea
          id="projectDescription"
          rows={7}
          value={data.description}
          onChange={(event) =>
            updateField("description", event.target.value)
          }
          placeholder="For example: We need a modern website where customers can learn about our services, view our portfolio, and contact us..."
          className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      {/* Reference Website */}
      <div className="space-y-2">
        <label
          htmlFor="referenceWebsiteUrl"
          className="text-sm font-medium text-text-primary"
        >
          Reference website
          <span className="ml-2 text-text-muted">(optional)</span>
        </label>

        <p className="text-sm text-text-muted">
          Have a website whose design or functionality you like?
          Share the link with us.
        </p>

        <input
          id="referenceWebsiteUrl"
          type="url"
          value={data.referenceWebsiteUrl}
          onChange={(event) =>
            updateField(
              "referenceWebsiteUrl",
              event.target.value
            )
          }
          placeholder="https://example.com"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>
    </div>
  );
}