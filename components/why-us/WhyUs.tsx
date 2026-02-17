"use client";

import { m } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Rocket,
  Workflow,
  Headphones,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Transparentny proces",
    description: "Jasne etapy współpracy i stała komunikacja.",
  },
  {
    icon: Code2,
    title: "Jakość kodu",
    description: "Modularna architektura i dobre praktyki.",
  },
  {
    icon: Workflow,
    title: "Nowoczesny stack",
    description: "Sprawdzone technologie gotowe na produkcję.",
  },
  {
    icon: Rocket,
    title: "Skalowalność",
    description: "Projektowanie z myślą o rozwoju produktu.",
  },
  {
    icon: Headphones,
    title: "Wsparcie",
    description: "Pomoc po wdrożeniu i dalszy rozwój.",
  },
  {
    icon: Users,
    title: "Partnerskie podejście",
    description: "Skupienie na celach biznesowych.",
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="py-32 bg-gradient-to-b from-primary-light to-background"
    >
      <div className="container-main flex flex-col gap-16 p-0">
        <h2 className="text-center">Dlaczego my</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;

            return (
              <m.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group service-card-wrapper"
              >
                <div className="service-card-inner">
                  <div className="service-card-icon-wrapper">
                    <Icon className="service-card-icon" />
                  </div>

                  <h3 className="service-card-title">{reason.title}</h3>

                  <p className="service-card-description">
                    {reason.description}
                  </p>
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
