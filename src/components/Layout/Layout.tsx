import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/index";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default Layout;
