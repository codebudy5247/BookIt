import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  Mumbai,
  Ahd,
  Bang,
  Chd,
  Chen,
  Hyd,
  Koch,
  Kolk,
  Ncr,
  Pune,
} from "../assets/images";
import { Icon } from "@iconify/react/dist/iconify.js";

const data = [
  {
    name: "Mumbai",
    image: Mumbai,
  },
  {
    name: "Delhi-NCR",
    image: Ncr,
  },
  {
    name: "Bengaluru",
    image: Bang,
  },
  {
    name: "Hyderabad",
    image: Hyd,
  },
  {
    name: "Ahmedabad",
    image: Ahd,
  },
  {
    name: "Chandigarh",
    image: Chd,
  },
  {
    name: "Chennai",
    image: Chen,
  },
  {
    name: "Pune",
    image: Pune,
  },
  {
    name: "Kolkata",
    image: Kolk,
  },
  {
    name: "Kochi",
    image: Koch,
  },
];

const UserLocationDialog = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  let userLocation = localStorage.getItem("location");
  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          {userLocation ? (
            <button
              className="flex text-lg text-Blueviolet font-medium"
              onClick={openModal}
            >
              {userLocation}{" "}
              <Icon icon="raphael:arrowdown" width={30} height={30} />
            </button>
          ) : (
            <button
              className="flex items-center  text-lg text-Blueviolet font-medium"
              onClick={openModal}
            >
              Select Your Loc...{" "}
              <Icon icon="raphael:arrowdown" width={30} height={30} />
            </button>
          )}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                          Popular Cities
                        </h2>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UserLocationDialog;
