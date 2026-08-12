import Button from "@/component/ui/Button";

interface StepNavigationProps {
  canGoBack: boolean;
  isLastStep: boolean;

  onBack?: () => void;
  onNext?: () => void;

  nextDisabled?: boolean;
}

export default function StepNavigation({
  canGoBack,
  isLastStep,
  onBack,
  onNext,
  nextDisabled,
}: StepNavigationProps) {
  return (
    <div className="mt-16 flex items-center justify-between">
      <div>
        {canGoBack && (
          <button
            type="button"
            onClick={onBack}
            className="text-text-secondary transition hover:text-text-primary"
          >
            Back
          </button>
        )}
      </div>

      <div>
        {!isLastStep && (
          <button
            type="button"
            onClick={onNext}
            disabled={nextDisabled}
            className="text-text-secondary transition hover:text-yellow-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}