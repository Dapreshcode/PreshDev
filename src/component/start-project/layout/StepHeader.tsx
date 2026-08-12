interface StepHeaderProps {
  title: string;
  description: string;
}

export default function StepHeader({
  title,
  description,
}: StepHeaderProps) {
  return (
    <div className="max-w-3xl">

      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Start Your Project
      </p>

      <h1 className="mt-4 text-4xl font-bold text-text-primary">
        {title}
      </h1>

      <p className="mt-5 text-lg leading-8 text-text-muted">
        {description}
      </p>

    </div>
  );
}