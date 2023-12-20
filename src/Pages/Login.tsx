import { useEffect } from "react";
import { Icon } from "@iconify/react";
import Container from "../components/Container";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../components/Heading";
import Input from "../components/Inputs/Input";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginUserMutation } from "../redux/api/authApi";
import { LoginUser } from "../types/user";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // API Login Mutation
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const from = ((location.state as any)?.from.pathname as string) || "/hotels";

  console.log(from,"from.....");
  

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("You successfully logged in");
      navigate(from);
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

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const User: LoginUser = {
      email: data.email,
      password: data.password,
    };
    loginUser(User);
  };
  return (
    <>
      <Container className="w-1/3 sm:w-2/3">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="flex flex-col gap-4">
            <Heading
              title="Welcome back"
              subtitle="Login to your account!"
              center
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
                Sign in
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col gap-4 mt-3">
          <hr />
          <div
            className="
      text-neutral-500 text-center mt-4 font-light"
          >
            <p>
              First time using BookIt?
              <span
                onClick={() => navigate("/register")}
                className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
              >
                {" "}
                Create an account
              </span>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
