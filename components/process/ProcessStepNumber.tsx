"use client";

import { m, MotionValue } from "framer-motion";

interface ProcessStepNumberProps {
  index: number;
  opacityStep: MotionValue;
}

export const ProcessStepNumber = ({
  index,
  opacityStep,
}: ProcessStepNumberProps) => {
  return (
    <m.div
      style={{ opacity: opacityStep }}
      className="hidden lg:flex items-center justify-center absolute -top-4 right-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary backdrop-blur-md"
    >
      {String(index + 1).padStart(2, "0")}
    </m.div>
  );
};
