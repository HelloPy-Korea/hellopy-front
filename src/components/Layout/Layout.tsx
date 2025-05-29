import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

const Layout = () => {
  const location = useLocation();
  const isYellow = (): boolean => {
    return (
      location.pathname === "/about" ||
      location.pathname === "/about/md" ||
      location.pathname === "/coc" ||
      location.pathname === "/gallery"
    );
  };
  return (
    <div>
      <Header
        backgroundColor={isYellow() ? "bg-header-yellow" : "bg-header-purple"}
        textColor={isYellow() ? "text-black" : "text-white"}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
