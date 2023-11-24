import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/index";
const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
