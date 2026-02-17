"use client";

import { useTransform } from "framer-motion";
import { ProcessStepNumber } from "./ProcessStepNumber";
import { ProcessStepIcon } from "./ProcessStepIcon";
import { ProcessStepCard } from "./ProcessStepCard";
import { IProcessStepProps } from "@/lib/process";

export default function ProcessStep({
  step,
  index,
  total,
  progress,
}: IProcessStepProps & { index: number }) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;

  const localProgress = useTransform(progress, (value) => {
    const raw = (value - start) / (end - start);
    return Math.min(Math.max(raw, 0), 1);
  });

  const opacity = useTransform(localProgress, [0, 1], [0.5, 1]);
  const opacityStep = useTransform(localProgress, [0, 1], [0.2, 1]);
  const y = useTransform(localProgress, [0, 1], [20, 0]);
  const scale = useTransform(localProgress, [0, 1], [0.95, 1]);
  const rotate = useTransform(localProgress, [0, 1], [step.rotate ?? -5, 0]);

  const gradient =
    step.gradient || "from-primary/40 via-transparent to-primary/40";

  return (
    <div className="flex flex-col relative">
      <ProcessStepNumber index={index} opacityStep={opacityStep} />
      <ProcessStepIcon icon={step.icon} gradient={gradient} rotate={rotate} />
      <ProcessStepCard
        title={step.title}
        description={step.description}
        gradient={gradient}
        icon={step.icon}
        opacity={opacity}
        y={y}
        scale={scale}
      />
    </div>
  );
}
