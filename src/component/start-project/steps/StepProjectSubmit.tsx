"use client";

import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useState } from "react";

import { useProjectWizard } from "@/hooks/useProjectWizard";


interface StepProjectSubmitProps {
  onSuccess: (result: {
    projectRequestId: string;
    projectCode?: string;
  }) => void;
}

export default function StepProjectSubmit({
  onSuccess,
}: StepProjectSubmitProps) {

  const { data } = useProjectWizard();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
  const response = await fetch("/api/project-requests", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    client: {
      name: data.clientName,
      email: data.clientEmail,
      phone: data.clientPhone,
    },

    websiteTypeId: data.websiteTypeId,
    industryId: data.industryId || null,

    otherWebsiteType: data.otherWebsiteType,
    otherIndustry: data.otherIndustry,

    projectName: data.projectName,

    businessName: data.businessName,
    businessDescription: data.businessDescription,
    businessServices: data.servicesOffered,

    businessRegistrationNumber:
      data.businessRegistrationNumber,

    businessAddress:
      data.businessAddress,

    countryOfOperation:
      data.countryOfOperation,

    projectGoals: data.projectGoals,
    otherProjectGoal: data.otherProjectGoal,

    description: data.description,

    selectedFeatureIds: data.selectedFeatureIds,
    customFeatures: data.customFeatures,

    designStyle: data.designStyle,
    designPreference: data.designPreference,

    primaryColor: data.primaryColor,
    secondaryColor: data.secondaryColor,
    accentColor: data.accentColor,

    referenceWebsiteUrl:
      data.referenceWebsiteUrl,

    logoOption: data.logoOption,
    additionalRequirements:
      data.additionalRequirements,

    hasContent: data.hasContent,

    timeline: data.timeline,
    budget: data.budget,
    currency: data.currency,
  }),
});

const result = await response.json();

onSuccess({
  projectRequestId: result.projectRequestId,
  projectCode: result.projectCode,
});

if (!response.ok) {
  throw new Error(
    result.error || "Unable to submit project request."
  );
}

      // We'll replace this with the actual success flow.
      console.log("Project request submitted");
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while submitting your request."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {/* Confirmation */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 size={32} />
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-text-primary">
          Your project is ready to submit
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-text-muted">
          We've collected the information we need to understand
          your project. Submit your request and our team can review
          the details and prepare the next steps.
        </p>
      </div>

      {/* What happens next */}
      <div className="rounded-2xl border border-border bg-surface p-6">
        <h3 className="font-semibold text-text-primary">
          What happens next?
        </h3>

        <div className="mt-5 space-y-4">
          <div className="flex gap-3">
            <span className="mt-1 text-accent">✓</span>

            <div>
              <p className="text-sm font-medium text-text-primary">
                We review your requirements
              </p>

              <p className="mt-1 text-sm leading-6 text-text-muted">
                Our team reviews your project details, features and
                design requirements.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="mt-1 text-accent">✓</span>

            <div>
              <p className="text-sm font-medium text-text-primary">
                We prepare your project details
              </p>

              <p className="mt-1 text-sm leading-6 text-text-muted">
                We'll use your requirements to determine the scope
                and prepare the appropriate quotation.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="mt-1 text-accent">✓</span>

            <div>
              <p className="text-sm font-medium text-text-primary">
                We contact you
              </p>

              <p className="mt-1 text-sm leading-6 text-text-muted">
                We'll get in touch with you about the project and
                the next steps.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-semibold text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Submitting...
          </>
        ) : (
          <>
            <Send size={18} />
            Submit Project Request
          </>
        )}
      </button>

      <p className="text-center text-xs leading-5 text-text-muted">
        By submitting this request, you confirm that the information
        provided is accurate and represents your current project
        requirements.
      </p>
    </div>
  );
}