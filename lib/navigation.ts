export interface INavItem {
  label: string;
  id: string;
}

export interface INavLinksProps {
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export const NAV_ITEMS: readonly INavItem[] = [
  { label: "Strona główna", id: "home" },
  { label: "O firmie", id: "about" },
  { label: "Usługi", id: "services" },
  { label: "Proces współpracy", id: "process" },
  { label: "Dlaczego my", id: "why-us" },
  { label: "Kontakt", id: "contact" },
];
