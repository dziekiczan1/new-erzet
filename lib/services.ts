export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const servicesHeading = "Nasze Usługi";

export const services: Service[] = [
  {
    title: "Aplikacje Webowe",
    description:
      "Projektujemy nowoczesne aplikacje dopasowane do celów biznesowych.",
    icon: "code",
  },
  {
    title: "UI/UX & Frontend",
    description: "Tworzymy szybkie i responsywne interfejsy w React i Next.js.",
    icon: "monitor",
  },
  {
    title: "Backend & API",
    description:
      "Budujemy skalowalne backendy z REST i GraphQL oraz integracje z systemami.",
    icon: "server",
  },
  {
    title: "Bazy Danych",
    description:
      "Projektujemy struktury danych i optymalizujemy zapytania w PostgreSQL i MongoDB.",
    icon: "database",
  },
  {
    title: "Architektura & DevOps",
    description:
      "Projektujemy architekturę oraz automatyzujemy wdrożenia i infrastrukturę.",
    icon: "layers",
  },
  {
    title: "Bezpieczeństwo",
    description:
      "Wdrażamy autoryzację, ochronę API i dobre praktyki zabezpieczania danych.",
    icon: "shield",
  },
  {
    title: "Cloud & Deployment",
    description:
      "Konfigurujemy środowiska chmurowe i usprawniamy procesy wdrożeniowe.",
    icon: "cloud",
  },
  {
    title: "Refaktoryzacja",
    description:
      "Porządkujemy kod i poprawiamy wydajność istniejących aplikacji.",
    icon: "workflow",
  },
];
