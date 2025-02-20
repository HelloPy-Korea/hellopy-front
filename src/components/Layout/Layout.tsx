import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

const Layout = () => {

  return (
      <div>
          <Header
              backgroundColor="bg-[#891FBD]"
              textColor="text-white"
          />
          <Outlet />
          <Footer/>
      </div>
  );
}

export default Layout;