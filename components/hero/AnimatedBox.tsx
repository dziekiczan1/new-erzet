"use client";
import { m, Variants } from "framer-motion";
import { HERO_TEXT } from "@/lib/hero";
import Button from "@/components/ui/Button";
import { Link } from "react-scroll";
import Badge from "@/components/ui/Badge";
import { Star } from "lucide-react";

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
    <m.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 lg:gap-12 lg:max-w-4xl"
    >
      <Badge
        text="Nowoczesne rozwiązania webowe"
        icon={Star}
        className="sm:mx-auto lg:mx-0 flex"
      />
      <h1>
        {lines.map((line, i) => (
          <m.span key={i} variants={lineVariants}>
            <span key={i} className={i === 0 ? "hero-text" : ""}>
              {line} <br />
            </span>
          </m.span>
        ))}
      </h1>
      <p className="max-w-xl text-pretty">{HERO_TEXT.description}</p>

      <div className="flex gap-4 lg:gap-12 sm:justify-center lg:justify-start">
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-64}
          role="button"
          tabIndex={0}
          className="w-fit"
          href="#contact"
          aria-label={`Nawiguj do sekcji Kontakt`}
        >
          <Button size="lg">{HERO_TEXT.ctaMain}</Button>
        </Link>
        <Link
          to="services"
          smooth
          duration={500}
          offset={-64}
          role="button"
          tabIndex={0}
          className="w-fit"
          href="#services"
          aria-label={`Nawiguj do sekcji Usługi`}
        >
          <Button size="lg" variant="secondary">
            {HERO_TEXT.ctaSecondary}
          </Button>
        </Link>
      </div>
    </m.div>
  );
};

export default AnimatedBox;
