import Logo from "@/components/header/Logo";
import MainMenu from "@/components/header/MainMenu";

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between"
      aria-label={`Main navigation`}
    >
      <Logo />
      <MainMenu />
    </nav>
  );
}
