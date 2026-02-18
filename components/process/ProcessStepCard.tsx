"use client";

import { m, MotionValue, useReducedMotion } from "framer-motion";
import { ICON_MAP } from "@/lib/process";

interface ProcessStepCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: keyof typeof ICON_MAP;
  opacity: MotionValue;
  y: MotionValue;
  scale: MotionValue;
}

export const ProcessStepCard = ({
  title,
  description,
  gradient,
  icon,
  opacity,
  y,
  scale,
}: ProcessStepCardProps) => {
  const Icon = ICON_MAP[icon];
  const shouldReduceMotion = useReducedMotion();

  const appliedStyle = shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity, y, scale };
  return (
    <m.div
      style={appliedStyle}
      className={`w-full max-w-4/5 mx-auto lg:w-auto md:max-w-none lg:mx-0 group relative flex flex-col text-center service-card-wrapper flex-1 ${gradient}`}
    >
      <div
        className={`relative overflow-hidden flex-1 rounded-3xl bg-foreground/30 backdrop-blur-xl md:backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/40 transition-all
          duration-400 ease-out group-hover:bg-foreground/40 group-hover:border-primary/30 group-hover:shadow-primary/20 group-hover:shadow-xl`}
      >
        <div className="relative p-4 lg:p-6">
          <div className="flex w-full justify-center mb-4 lg:mb-0 lg:hidden">
            <Icon
              className="w-6 h-6 text-light/80 drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            />
          </div>
          <h3 className="service-card-title text-primary/85 uppercase tracking-widest">
            {title}
          </h3>
          <p className="service-card-description text-light text-pretty">
            {description}
          </p>
        </div>
      </div>
    </m.div>
  );
};
