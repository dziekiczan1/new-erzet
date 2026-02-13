"use client";

import Image, { ImageProps } from "next/image";
import { motion, Variants, Transition } from "framer-motion";
import clsx from "clsx";

type AnimationPreset =
  | "slide-right"
  | "slide-left"
  | "slide-up"
  | "slide-down"
  | "fade-scale"
  | "zoom-in"
  | "zoom-out"
  | "rotate-in"
  | "blur-in"
  | "reveal-up"
  | "clip-expand"
  | "soft-float"
  | "none";

interface MotionImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  preset?: AnimationPreset;
  delay?: number;
  duration?: number;
  customVariants?: Variants;
  className?: string;
  imageClass?: string;
  priority?: boolean;
  fetchPriority?: "auto" | "high" | "low";
  animateImmediately?: boolean;
}

const presets: Record<AnimationPreset, Variants> = {
  "slide-right": {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-scale": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    hidden: { opacity: 0, scale: 1.15 },
    visible: { opacity: 1, scale: 1 },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -6, scale: 0.96 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "reveal-up": {
    hidden: { opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  },
  "clip-expand": {
    hidden: { clipPath: "circle(0% at 50% 50%)" },
    visible: { clipPath: "circle(150% at 50% 50%)" },
  },
  "soft-float": {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  },
  none: {
    hidden: {},
    visible: {},
  },
};

export default function MotionImage({
  src,
  alt,
  preset = "fade-scale",
  delay = 0,
  duration = 0.8,
  customVariants,
  className,
  imageClass,
  priority = false,
  fetchPriority = "auto",
  animateImmediately = false,
  ...imageProps
}: MotionImageProps) {
  const variants = customVariants ?? presets[preset];

  const transition: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <motion.div
      initial="hidden"
      animate={animateImmediately ? "visible" : undefined}
      whileInView={animateImmediately ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={transition}
      className={clsx("relative", className)}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill
        fetchPriority={fetchPriority}
        className={clsx(
          imageClass,
          "object-contain w-auto min-h-full lg:w-full h-auto",
        )}
        {...imageProps}
      />
    </motion.div>
  );
}
