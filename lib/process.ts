import { MotionValue } from "framer-motion";
import { Calendar, Code, FileText, PenTool, Rocket } from "lucide-react";

export type ProcessIcons = "file" | "calendar" | "pen" | "code" | "rocket";

export interface IStep {
  icon: ProcessIcons;
  title: string;
  description: string;
  gradient: string;
  rotate?: number;
}

export interface IProcessStepProps {
  step: IStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

export const PROCESS_HEADING = "Proces współpracy";

export const ICON_MAP = {
  file: FileText,
  calendar: Calendar,
  pen: PenTool,
  code: Code,
  rocket: Rocket,
};

export const PROCESS_STEPS: IStep[] = [
  {
    icon: "file",
    title: "Analiza",
    description: "Poznajemy Twój biznes i definiujemy cele projektu.",
    gradient: "from-primary/40 via-transparent to-tertiary/40",
    rotate: -15,
  },
  {
    icon: "calendar",
    title: "Planowanie",
    description: "Tworzymy harmonogram, zakres prac i wycenę.",
    gradient: "from-secondary/40 via-transparent to-quaternary/40",
    rotate: 9,
  },
  {
    icon: "pen",
    title: "Projekt",
    description: "Przygotowujemy makiety i finalny design.",
    gradient: "from-accent/40 via-transparent to-primary/40",
    rotate: -12,
  },
  {
    icon: "code",
    title: "Rozwój",
    description: "Kodujemy, testujemy i dostarczamy działający produkt.",
    gradient: "from-tertiary/40 via-transparent to-secondary/40",
    rotate: 6,
  },
  {
    icon: "rocket",
    title: "Wdrożenie",
    description: "Uruchamiamy rozwiązanie i zapewniamy wsparcie.",
    gradient: "from-primary/40 via-transparent to-accent/40",
    rotate: -11,
  },
];
