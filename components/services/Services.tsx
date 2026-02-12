"use client";

import { motion } from "framer-motion";
import { Code, Server, Monitor, Layers } from "lucide-react"; // przykładowe ikony
import MotionImage from "@/components/ui/MotionImage";
import { IMG_URL } from "@/lib/images";

const services = [
  {
    title: "Tworzenie aplikacji webowych",
    description:
      "Projektujemy i budujemy nowoczesne aplikacje webowe, dopasowane do Twoich potrzeb biznesowych.",
    icon: Code,
  },
  {
    title: "Backend & API",
    description:
      "Skalowalne i bezpieczne backendy z REST / GraphQL oraz integracje z zewnętrznymi API.",
    icon: Server,
  },
  {
    title: "UI/UX & Frontend",
    description:
      "Responsywne, nowoczesne interfejsy z React / Next.js, dbając o najlepsze doświadczenie użytkownika.",
    icon: Monitor,
  },
  {
    title: "Architektura & DevOps",
    description:
      "Pomagamy w skalowaniu infrastruktury, automatyzacji CI/CD oraz optymalizacji procesów.",
    icon: Layers,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col py-8 lg:py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-primary-light"
    >
      <div className="container-main flex flex-col gap-8">
        <h2 className="mx-auto text-center">Nasze Usługi</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center p-6 bg-gradient-to-bl from-background/50 to-transparent backdrop-blur-lg rounded-2xl border border-tertiary/20 text-center hover:scale-105 hover:shadow-lg transition-transform"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-pretty leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
