"use client";

import { m, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { IWhyUsCard, WHYUS_ICON_MAP } from "@/lib/why-us";

export const WhyUsCard = ({ reason, index }: IWhyUsCard) => {
  const Icon = WHYUS_ICON_MAP[
    reason.icon as keyof typeof WHYUS_ICON_MAP
  ] as LucideIcon;
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      key={reason.title}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group service-card-wrapper"
    >
      <div className="service-card-inner lg:min-h-0">
        <div className="service-card-icon-wrapper">
          <Icon className="service-card-icon" aria-hidden="true" />
        </div>

        <h3 className="service-card-title">{reason.title}</h3>

        <p className="service-card-description">{reason.description}</p>
      </div>
    </m.div>
  );
};
