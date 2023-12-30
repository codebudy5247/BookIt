import { Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Logo from "../Logo";
import Drawer from "../Drawer";
import Drawerdata from "./DrawerData";
import Avatar from "../Avatar";
import { useCookies } from "react-cookie";
import { useAppSelector } from "../../redux/hook";
import { useLogoutUserMutation } from "../../redux/api/authApi";
import { toast } from "react-toastify";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const CustomLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link to={href}>
      <span onClick={onClick} className="px-3 py-4 text-lg font-normal">
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("/hotels");

  const [cookies] = useCookies(["logged_in"]);

  const logged_in = cookies.logged_in;

  const [logoutUser, { isLoading, isSuccess, error, isError }] =
    useLogoutUserMutation();
  const user = useAppSelector((state) => state.userState.user);
  localStorage.setItem("userData", JSON.stringify(user));

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("userData");
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
    if (isSuccess) {
      localStorage.removeItem("userData");
    }
  };

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
  };

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <div className="relative flex h-12 md:h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <Logo />
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  <CustomLink
                    key="Home"
                    href="/hotels"
                    onClick={() => handleLinkClick("/hotels")}
                  >
                    <span
                      className={classNames(
                        "/hotels" === currentLink
                          ? "underline-links"
                          : "text-slategray",
                        "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                      )}
                      aria-current={"/hotels" ? "page" : undefined}
                    >
                      Home
                    </span>
                  </CustomLink>
                  <CustomLink
                    key="About"
                    href="/"
                    onClick={() => handleLinkClick("/")}
                  >
                    <span
                      className={classNames(
                        "/" === currentLink
                          ? "underline-links"
                          : "text-slategray",
                        "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                      )}
                      aria-current={"/" ? "page" : undefined}
                    >
                      About
                    </span>
                  </CustomLink>
                  {user?.role === "admin" && (
                    <CustomLink
                      key="Admin"
                      href="/admin"
                      onClick={() => handleLinkClick("/admin")}
                    >
                      <span
                        className={classNames(
                          "/admin" === currentLink
                            ? "underline-links"
                            : "text-slategray",
                          "px-3 py-4 text-lg font-normal opacity-75 hover:opacity-100"
                        )}
                        aria-current={"/admin" ? "page" : undefined}
                      >
                        Admin
                      </span>
                    </CustomLink>
                  )}
                </div>
              </div>

              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4"></div>
              </div>
            </div>

            <div className="flex gap-3 items-center">
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
                    onClick={() => navigate("/profile")}
                  >
                    <Avatar src={user?.avatar} />
                  </div>

                  <div
                    className="hidden lg:block cursor-pointer"
                    onClick={() => onLogoutHandler()}
                  >
                    <Icon
                      icon="material-symbols:logout"
                      width={40}
                      height={40}
                      color="blue"
                    />
                  </div>
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
