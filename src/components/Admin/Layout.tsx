import Navigation from "./Navigation";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Navigation />
      <main className="p-5 grow bg-white my-2 mr-2 rounded-3xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;
