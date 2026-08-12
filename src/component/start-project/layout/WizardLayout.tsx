import { ReactNode } from "react";

import Container from "@/component/ui/container";
import Section from "@/component/ui/section";

import ProgressBar from "./ProgressBar";
import StepHeader from "./StepHeader";
import StepNavigation from "./StepNavigation";

interface WizardLayoutProps {
  children: ReactNode;

  title: string;

  description: string;

  currentStep: number;

  totalSteps: number;

  canGoBack?: boolean;

  onBack?: () => void;

  onNext?: () => void;

  nextDisabled?: boolean;
}

export default function WizardLayout({
  children,
  title,
  description,
  currentStep,
  totalSteps,
  canGoBack = false,
  onBack,
  onNext,
  nextDisabled,
}: WizardLayoutProps) {

  const isLastStep = currentStep === totalSteps;
  return (
    <Section className="min-h-screen py-16">
      <Container className="max-w-5xl">

        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        <StepHeader
          title={title}
          description={description}
        />

        <div className="mt-12">
          {children}
        </div>
<StepNavigation
  canGoBack={canGoBack}
  isLastStep={isLastStep}
  onBack={onBack}
  onNext={onNext}
  nextDisabled={nextDisabled}
/>

      </Container>
    </Section>
  );
}