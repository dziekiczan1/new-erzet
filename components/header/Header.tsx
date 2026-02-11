import { Navbar } from "@/components/header/Navbar";
import ScrollAwareHeader from "@/components/header/ScrollAwareHeader";

const Header = () => {
  return (
    <header data-header="site-header" className={`fixed inset-x-0 top-0 z-50`}>
      <Navbar />
      <ScrollAwareHeader />
    </header>
  );
};
export default Header;
