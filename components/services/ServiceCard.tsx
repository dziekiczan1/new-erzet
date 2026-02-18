"use client";

import { m, useReducedMotion } from "framer-motion";
import {
  Code,
  Server,
  Monitor,
  Layers,
  Database,
  ShieldCheck,
  Cloud,
  Workflow,
} from "lucide-react";

import { IServiceCardProps } from "@/lib/services";

const ServiceCard = ({ service, index }: IServiceCardProps) => {
  const iconMap = {
    code: Code,
    server: Server,
    monitor: Monitor,
    layers: Layers,
    database: Database,
    shield: ShieldCheck,
    cloud: Cloud,
    workflow: Workflow,
  };
  const shouldReduceMotion = useReducedMotion();
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <m.div
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        scale: { type: "spring", stiffness: 220, damping: 18 },
      }}
      className="group service-card-wrapper"
    >
      <div className="service-card-inner border-line-top">
        <div className="service-card-icon-wrapper">
          <Icon
            aria-hidden="true"
            focusable="false"
            className="service-card-icon"
          />
        </div>

        <h3 className="service-card-title">{service.title}</h3>

        <p className="service-card-description">{service.description}</p>
      </div>
    </m.div>
  );
};

export default ServiceCard;
