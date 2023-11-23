import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "../Logo";
import Drawer from "../Drawer";
import Drawerdata from "./DrawerData";
import UserLocationDialog from "../UserLocationDialog";

// interface NavigationItem {
//   name: string;
//   href: string;
//   current: boolean;
// }

// const navigation: NavigationItem[] = [
//   { name: "Home", href: "#/", current: true },
//   { name: "Courses", href: "#courses", current: false },
//   { name: "Mentor", href: "#mentor", current: false },
//   { name: "Pricing", href: "/Pricing", current: false },
//   { name: "Testimonial", href: "#testimonial", current: false },
// ];

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }

// const CustomLink = ({
//   href,
//   onClick,
//   children,
// }: {
//   href: string;
//   onClick: () => void;
//   children: React.ReactNode;
// }) => {
//   return (
//     <Link to={href}>
//       <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
//         {children}
//       </span>
//     </Link>
//   );
// };

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = React.useState(false);

  const [currentLink, setCurrentLink] = useState("/");

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

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
                  {/* {navigation.map((item) => (
                      <CustomLink
                        key={item.name}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        <span
                          className={classNames(
                            item.href === currentLink
                              ? "underline-links"
                              : "text-slategray",
                            "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                          )}
                          aria-current={item.href ? "page" : undefined}
                        >
                          {item.name}
                        </span>
                      </CustomLink>
                    ))} */}
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
