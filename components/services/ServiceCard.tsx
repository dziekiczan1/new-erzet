"use client";

import { motion } from "framer-motion";
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

import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
  index: number;
};

const ServiceCard = ({ service, index }: ServiceCardProps) => {
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

  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        scale: { type: "spring", stiffness: 220, damping: 18 },
      }}
      className="group service-card-wrapper square-bevel"
    >
      <div className="service-card-inner square-bevel">
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
    </motion.div>
  );
};

export default ServiceCard;
