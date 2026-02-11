"use client";
import { motion, Variants } from "framer-motion";
import { heroText } from "@/lib/hero";
import Button from "@/components/Button";

interface AnimatedTextProps {
  lines: string[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedBox = ({ lines }: AnimatedTextProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 md:gap-8 md:max-w-4xl"
    >
      <h1>
        {lines.map((line, i) => (
          <motion.span key={i} variants={lineVariants}>
            <span key={i} className={i === 0 ? "hero-text" : ""}>
              {line} <br />
            </span>
          </motion.span>
        ))}
      </h1>
      <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl">
        {heroText.description}
      </p>
      <Button size="lg" className="w-fit">
        {heroText.cta}
      </Button>
    </motion.div>
  );
};

export default AnimatedBox;
