"use client";

import { m, MotionValue, useReducedMotion } from "framer-motion";

interface ProcessStepNumberProps {
  index: number;
  opacityStep: MotionValue;
}

export const ProcessStepNumber = ({
  index,
  opacityStep,
}: ProcessStepNumberProps) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <m.div
      style={{ opacity: shouldReduceMotion ? 1 : opacityStep }}
      className="hidden lg:flex items-center justify-center absolute -top-4 right-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary backdrop-blur-md"
      role="text"
      aria-label={`Krok ${index + 1}`}
    >
      {String(index + 1).padStart(2, "0")}
    </m.div>
  );
};
