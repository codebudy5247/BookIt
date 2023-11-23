import { useState } from "react";
import { Icon } from "@iconify/react";
import Container from "../components/Container";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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
  return (
    <>
      <Container className="w-1/3">
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
                onClick={() => navigate("/login")}
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
      </Container>
    </>
  );
};

export default Register;
