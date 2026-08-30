"use client";

import { CheckCircle2, Plus } from "lucide-react";

interface StepProjectSuccessProps {
  projectRequestId: string;
  projectCode?: string;
  onStartAnother: () => void;
}

export default function StepProjectSuccess({
  projectRequestId,
  projectCode,
  onStartAnother,
}: StepProjectSuccessProps) {
  return (
    <div className="mx-auto max-w-2xl space-y-8 text-center mt-20">
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-10">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 size={42} />
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-text-primary">
          Project request received
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-muted">
          Thank you for sharing your project with us. We've
          successfully received your requirements and our team
          will review them before getting in touch with you.
        </p>

        {projectCode && (
          <div className="mt-6 rounded-xl border border-border bg-surface p-4">
            <p className="text-xs text-text-muted">
              Project reference
            </p>

            <p className="mt-1 font-semibold text-text-primary">
              {projectCode}
            </p>
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6 text-left">
        <h2 className="font-semibold text-text-primary">
          What happens next?
        </h2>

        <div className="mt-5 space-y-4">
          <div>
            <p className="text-sm font-medium text-text-primary">
              We review your request
            </p>

            <p className="mt-1 text-sm leading-6 text-text-muted">
              We'll review your project requirements, selected
              features and other details.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-text-primary">
              We prepare the next steps
            </p>

            <p className="mt-1 text-sm leading-6 text-text-muted">
              We'll assess the scope of the project and prepare
              the appropriate quotation.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-text-primary">
              We'll contact you
            </p>

            <p className="mt-1 text-sm leading-6 text-text-muted">
              We'll use the contact details you provided to reach
              out regarding your project.
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onStartAnother}
        className="mx-auto flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-semibold text-background transition hover:opacity-90"
      >
        <Plus size={18} />
        Start Another Project
      </button>

      <p className="text-xs leading-5 text-text-muted">
        You can submit multiple projects using the same contact
        information.
      </p>
    </div>
  );
}