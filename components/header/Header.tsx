import { Navbar } from "@/components/header/Navbar";

const Header = () => {
  return (
    <header className={`container-main fixed inset-x-0 top-0 z-50`}>
      <Navbar />
    </header>
  );
};
export default Header;
