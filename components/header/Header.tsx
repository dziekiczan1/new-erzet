import { Navbar } from "@/components/header/Navbar";
import ScrollAwareHeader from "@/components/header/ScrollAwareHeader";

const Header = () => {
  return (
    <header data-header="site-header">
      <Navbar />
      <ScrollAwareHeader />
    </header>
  );
};
export default Header;
