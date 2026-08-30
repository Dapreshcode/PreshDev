"use client";

import { useEffect, useState } from "react";

import { WebsiteTypeWithFeatures } from "@/server/services/website-type.service";
import { IndustryWithFeatures } from "@/server/services/industry.service";
import { WizardFeatures } from "@/server/services/project-feature.service";

import WizardLayout from "./layout/WizardLayout";
import { useProjectWizard } from "@/hooks/useProjectWizard";
import { WIZARD_STEPS } from "./WizardSteps";
import { validateWizardStep } from "./wizardValidation";

import StepProjectSubmit from "./steps/StepProjectSubmit";
import StepProjectSuccess from "./steps/StepProjectSuccess";

interface ProjectWizardProps {
  websiteTypes: WebsiteTypeWithFeatures[];
  industries: IndustryWithFeatures[];
  features: WizardFeatures;
}

interface SubmissionResult {
  projectRequestId: string;
  projectCode?: string;
}

export default function ProjectWizard({
  websiteTypes,
  industries,
  features,
}: ProjectWizardProps) {
  const {
    currentStep,
    totalSteps,
    nextStep,
    previousStep,
    data,
    resetWizard,
  } = useProjectWizard();

  // ----------------------------------------
  // Submission state
  // ----------------------------------------

  const [submissionResult, setSubmissionResult] =
    useState<SubmissionResult | null>(null);

  // ----------------------------------------
  // Step configuration
  // ----------------------------------------

  const currentConfig = WIZARD_STEPS[currentStep];

  if (!currentConfig) {
    throw new Error(
      `Step ${currentStep} is not registered.`,
    );
  }

  const StepComponent = currentConfig.component;

  // ----------------------------------------
  // Wizard data
  // ----------------------------------------

  const wizardData = {
    websiteTypes,
    industries,
    features,
  };

  // ----------------------------------------
  // Validation
  // ----------------------------------------

  const nextDisabled = !validateWizardStep({
    step: currentStep,
    data,
    websiteTypes,
    industries,
    defaultValidation: currentConfig.isValid,
  });

  // ----------------------------------------
  // Overlay behaviour
  // ----------------------------------------

  const isOverlayOpen = currentStep >= 2;

  const [mounted, setMounted] =
    useState(isOverlayOpen);

  const [visible, setVisible] =
    useState(false);

  // ----------------------------------------
  // Overlay animation
  // ----------------------------------------

  useEffect(() => {
    if (isOverlayOpen) {
      setMounted(true);

      const raf = requestAnimationFrame(() => {
        setVisible(true);
      });

      return () => {
        cancelAnimationFrame(raf);
      };
    }

    setVisible(false);

    const timeout = setTimeout(() => {
      setMounted(false);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOverlayOpen]);

  // ----------------------------------------
  // Prevent background scrolling
  // ----------------------------------------

  useEffect(() => {
    document.body.style.overflow = mounted
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  // ----------------------------------------
  // Submission success
  // ----------------------------------------

  const handleSubmissionSuccess = (
    result: SubmissionResult,
  ) => {
    localStorage.removeItem(
      "preshdev_project_wizard",
    );

    setSubmissionResult(result);
  };

  // ----------------------------------------
  // Render current step
  // ----------------------------------------

  const renderStep = () => {
    if (currentStep === 12) {
      return (
        <StepProjectSubmit
          onSuccess={handleSubmissionSuccess}
        />
      );
    }

    return (
      <StepComponent
        wizardData={wizardData}
      />
    );
  };

  // ----------------------------------------
  // Wizard
  // ----------------------------------------

  const wizard = (
    <WizardLayout
      title={currentConfig.title}
      description={currentConfig.description}
      currentStep={currentStep}
      totalSteps={totalSteps}
      canGoBack={currentStep > 1}
      onBack={previousStep}
      onNext={nextStep}
      nextDisabled={nextDisabled}
    >
      {renderStep()}
    </WizardLayout>
  );

  // ----------------------------------------
  // SUCCESS SCREEN
  // ----------------------------------------
  //
  // IMPORTANT:
  // This return happens AFTER all hooks.
  // ----------------------------------------

  if (submissionResult) {
    return (
      <StepProjectSuccess
        projectRequestId={
          submissionResult.projectRequestId
        }
        projectCode={
          submissionResult.projectCode
        }
        onStartAnother={() => {
          resetWizard();
          setSubmissionResult(null);
        }}
      />
    );
  }

  // ----------------------------------------
  // Normal wizard render
  // ----------------------------------------

  return (
    <>
      {/* Step 1 */}
      {currentStep === 1 && wizard}

      {/* Steps 2+ */}
      {mounted && (
        <div
          className={`fixed inset-0 z-40 overflow-y-auto bg-background transition-all duration-300 ease-out ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="pt-[88px]">
            {wizard}
          </div>
        </div>
      )}
    </>
  );
}