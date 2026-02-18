"use client";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";

import { FormStatus } from "@/lib/contact-form";

export const StatusIndicator = ({ status }: { status: FormStatus }) => {
  const statusConfig = {
    loading: {
      icon: "spinner.svg",
      text: "Wysyłanie...",
      color: "text-gray-300",
    },
    success: {
      icon: "check.svg",
      text: "Wiadomość wysłana!",
      color: "text-green-500",
    },
    error: {
      icon: "times.svg",
      text: "Nie udało się wysłać. Spróbuj ponownie.",
      color: "text-red-500",
    },
  } as const;
  const shouldReduceMotion = useReducedMotion();
  if (status === "idle") return null;

  const currentStatus = statusConfig[status];

  return (
    <m.div
      role="status"
      aria-live="polite"
      initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.5 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-2"
    >
      <Image
        src={`./icons/${currentStatus.icon}`}
        alt=""
        width={34}
        height={34}
        aria-hidden="true"
        className={status === "loading" ? "animate-spin" : ""}
      />
      <p className={`${currentStatus.color} text-xs`}>{currentStatus.text}</p>
    </m.div>
  );
};
