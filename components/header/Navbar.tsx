import Logo from "@/components/header/Logo";
import MainMenu from "@/components/header/MainMenu";

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between rounded-2xl bg-background/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-4 shadow-sm"
      aria-label={`Main navigation`}
    >
      <Logo />
      <MainMenu />
    </nav>
  );
}
