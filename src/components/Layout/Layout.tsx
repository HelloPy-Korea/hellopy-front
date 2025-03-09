import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

const Layout = () => {
  const location = useLocation();

  const isYellow = (): boolean => {
    if (location.pathname === "/about" || location.pathname === "/about/md") {
      return true;
    }
    return false;
  };
  return (
    <div>
      <Header
        backgroundColor={isYellow() ? "bg-[#FFEEA4]" : "bg-[#891FBD]"}
        textColor={isYellow() ? "text-black" : "text-white"}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
