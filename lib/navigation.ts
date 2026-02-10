export type NavItem = {
  label: string;
  id: string;
};

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Strona główna", id: "home" },
  { label: "O firmie", id: "about" },
  { label: "Usługi", id: "services" },
  { label: "Proces współpracy", id: "process" },
  { label: "Dlaczego my", id: "why-us" },
  { label: "Kontakt", id: "contact" },
];
