import { Disclosure } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
import Logo from "../Logo";
import Drawer from "../Drawer";
import Drawerdata from "./DrawerData";
import Avatar from "../Avatar";
import MenuItem from "../MenuItem";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../redux/hook";
import { useLogoutUserMutation } from "../../redux/api/authApi";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [menuItemIsOpen, setMenuItemIsOpen] = useState(false);

  const [cookies] = useCookies(["logged_in"]);
  const logged_in = cookies.logged_in;

  const [logoutUser, { isLoading, isSuccess, error, isError }] =
    useLogoutUserMutation();
  const user = useAppSelector((state) => state.userState.user);
  localStorage.setItem("userData", JSON.stringify(user));

  useEffect(() => {
    if (isSuccess) {
      window.location.href = "/login";
    }

    if (isError) {
      if (Array.isArray((error as any).data.error)) {
        (error as any).data.error.forEach((el: any) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error((error as any).data.message, {
          position: "top-right",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const onLogoutHandler = async () => {
    logoutUser();
  };

  const toggleOpen = useCallback(() => {
    setMenuItemIsOpen((value) => !value);
  }, []);

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
                <div className="flex space-x-4"></div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              {/* <UserLocationDialog /> */}
              {!logged_in && (
                <>
                  <div className="hidden lg:block">
                    <button
                      type="button"
                      className="text-lg text-Blueviolet font-medium"
                      onClick={() => navigate("/login")}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="hidden lg:block">
                    <button
                      className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
                      onClick={() => navigate("/register")}
                    >
                      Sign up
                    </button>
                  </div>
                </>
              )}

              {logged_in && (
                <div className="flex gap-3 items-center">
                  <div
                    className="hidden lg:block cursor-pointer"
                    onClick={toggleOpen}
                  >
                    <Avatar src={user?.avatar} />
                  </div>

                  {/* Menu Item */}
                  {menuItemIsOpen && (
                    <div
                      className="
                      absolute 
                      rounded-xl 
                      shadow-md
                      w-auto
                      bg-white 
                      overflow-hidden 
                      right-0 
                      top-12 
                      text-sm
                    "
                    >
                      <div className="flex flex-col cursor-pointer">
                        <>
                          <MenuItem
                            label="Profile"
                            onClick={() => navigate("/profile")}
                          />
                          <MenuItem label="My favorites" />
                          <MenuItem label="My reservations" />
                          {user?.role === "admin" && (
                            <MenuItem
                              label="Admin"
                              onClick={() => navigate("/admin")}
                            />
                          )}
                          <hr />
                          <MenuItem
                            label="Logout"
                            onClick={() => onLogoutHandler()}
                          />
                        </>
                      </div>
                    </div>
                  )}
                </div>
              )}
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
