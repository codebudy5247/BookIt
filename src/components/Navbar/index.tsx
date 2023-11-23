import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../Logo";
import Drawer from "../Drawer";
import Drawerdata from "./DrawerData";
import UserLocationDialog from "../UserLocationDialog";

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}
              <Logo />

              {/* LINKS */}

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                 
                </div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <UserLocationDialog />
              <div className="hidden lg:block">
                <button
                  type="button"
                  className="text-lg text-Blueviolet font-medium"
                  onClick={() => navigate('/login')}
                >
                  Log In
                </button>
              </div>

              <div className="hidden lg:block">
                <button
                  className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
                  onClick={() => navigate('/register')}
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Icon
                icon="mdi:hamburger-menu"
                onClick={() => setIsOpen(true)}
                width={40}
                height={40}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
