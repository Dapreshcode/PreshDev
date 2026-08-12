"use client";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

interface StepOverlayProps {
  open: boolean;
  title: string;
  description: string;
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  children: React.ReactNode;
}

export default function StepOverlay({
  open,
  title,
  description,
  currentStep,
  totalSteps,
  onBack,
  children,
}: StepOverlayProps) {
  // controls whether it's in the DOM at all
  const [mounted, setMounted] = useState(open);
  // controls the enter/exit animation classes
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // wait a frame so the enter transition actually plays
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
      const timeout = setTimeout(() => setMounted(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  useEffect(() => {
    if (mounted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-slate-950 transition-all duration-300 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* header */}
      <div className="border-b border-slate-800 px-6 py-5">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-yellow-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="mb-3 text-xs font-medium text-text-muted">
          Step {currentStep} of {totalSteps}
        </div>

        <h2 className="text-2xl font-semibold text-text-primary">{title}</h2>
        <p className="mt-1 text-sm text-text-muted">{description}</p>
      </div>

      {/* scrollable body */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="mx-auto max-w-4xl">{children}</div>
      </div>
    </div>
  );
}