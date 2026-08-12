interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-10">

      <div className="mb-3 flex items-center justify-between">

        <span className="text-sm text-text-muted">
          Step {currentStep} of {totalSteps}
        </span>

        <span className="text-sm text-accent">
          {Math.round(percentage)}%
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-surface-elevated">

        <div
          className="h-full rounded-full bg-accent transition-all duration-300"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}