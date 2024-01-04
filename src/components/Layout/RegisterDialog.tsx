import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "./Heading";
import Input from "../UI/Input";

const Register = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log({ data });
    setIsLoading(false);
  };

  const onToggle = () =>{
    closeModal()
    
  }

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
        <div className="hidden lg:block">
          <button
            className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
            onClick={openModal}
          >
            Sign up
          </button>
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
                  <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <div className="flex flex-col gap-4">
                      <Heading
                        title="Welcome to BookIt"
                        subtitle="Create an account!"
                        center
                      />

                      <Input
                        id="name"
                        label="Name"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="email"
                        label="Email"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="password"
                        label="Password"
                        type="password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                      />

                      <div>
                        <button
                          type="submit"
                          className="group relative flex w-full justify-center rounded-md border border-transparent bg-Blueviolet py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Icon
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              icon="material-symbols-light:lock"
                            />
                          </span>
                          Sign up
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="flex flex-col gap-4 mt-3">
                    <hr />
                    <div
                      className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
                    >
                      <p>
                        Already have an account?
                        <span
                          onClick={onToggle}
                          className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
                        >
                          {" "}
                          Log in
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 "
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Register;
