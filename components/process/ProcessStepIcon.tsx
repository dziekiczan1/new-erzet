"use client";

import { m, MotionValue, useReducedMotion } from "framer-motion";
import { ICON_MAP } from "@/lib/process";

interface ProcessStepIconProps {
  icon: keyof typeof ICON_MAP;
  gradient: string;
  rotate: MotionValue;
}

export const ProcessStepIcon = ({
  icon,
  gradient,
  rotate,
}: ProcessStepIconProps) => {
  const Icon = ICON_MAP[icon];
  const shouldReduceMotion = useReducedMotion();
  const appliedRotate = shouldReduceMotion ? 0 : rotate;

  return (
    <div className="hidden lg:block mx-auto mb-20 group relative w-20 h-20 rounded-2xl shadow-xl bg-foreground ring-2 ring-foreground transition-all duration-300">
      <m.div
        style={{ rotate: appliedRotate }}
        className={`ring-2 ring-primary/30 bg-gradient-to-br ${gradient} absolute inset-0 rounded-2xl flex items-center justify-center`}
      >
        <Icon
          className="w-8 h-8 text-light/80 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        />
      </m.div>
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-primary/60 opacity-0 blur-md transition-all duration-300" />
    </div>
  );
};
