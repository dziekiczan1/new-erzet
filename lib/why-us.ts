import {
  Code2,
  Headphones,
  Rocket,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

export const WHYUS_HEADING = "Dlaczego my";

export const WHYUS_ICON_MAP = {
  shield: ShieldCheck,
  code: Code2,
  workflow: Workflow,
  rocket: Rocket,
  headphones: Headphones,
  users: Users,
};

export interface IReason {
  icon: string;
  title: string;
  description: string;
}

export interface IWhyUsCard {
  reason: IReason;
  index: number;
}

export const WHYUS: IReason[] = [
  {
    icon: "shield",
    title: "Transparentny proces",
    description: "Jasne etapy współpracy i stała komunikacja.",
  },
  {
    icon: "code",
    title: "Jakość kodu",
    description: "Modularna architektura i dobre praktyki.",
  },
  {
    icon: "workflow",
    title: "Nowoczesny stack",
    description: "Sprawdzone technologie gotowe na produkcję.",
  },
  {
    icon: "rocket",
    title: "Skalowalność",
    description: "Projektowanie z myślą o rozwoju produktu.",
  },
  {
    icon: "headphones",
    title: "Wsparcie",
    description: "Pomoc po wdrożeniu i dalszy rozwój.",
  },
  {
    icon: "users",
    title: "Partnerskie podejście",
    description: "Skupienie na celach biznesowych.",
  },
];
