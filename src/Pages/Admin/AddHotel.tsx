import React from "react";
import Layout from "../../components/Admin/Layout";
import { FormProvider, useForm } from "react-hook-form";
import { HotelMutateInput } from "../../types/hotel";

const AddHotel = () => {
  const formMethods = useForm<HotelMutateInput>();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = formMethods;

  const onSubmit = handleSubmit((formDataJson: HotelMutateInput) => {
    console.log(formDataJson, "formDataJson");
  });

  return (
    <Layout>
      <div>
        <h6 className="font-bold text-center text-4xl text-Blueviolet underline">
          Add Hotel
        </h6>

        <FormProvider {...formMethods}>
          <form className="gap-4 mt-5" onSubmit={onSubmit}>
            <div className="grid md:grid-cols-[2fr_2fr] gap-2 mt-2">
              <input
                id="name"
                placeholder="Name"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("name", { required: "This field is required" })}
              /> 
              {/* {errors.name && (
                <span className="text-red">{errors.name.message}</span>
              )} */}
              <input
                id="price"
                placeholder="Price"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("price", { required: "This field is required" })}
              />
              <input
                id="state"
                placeholder="State"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("location.state", {
                  required: "This field is required",
                })}
              />
              <input
                id="city"
                placeholder="City"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("location.city", {
                  required: "This field is required",
                })}
              />
              <input
                id="zip"
                placeholder="Zip"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("location.zip", {
                  required: "This field is required",
                })}
              />
              <input
                id="street"
                placeholder="Street"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("location.street", {
                  required: "This field is required",
                })}
              />
              <input
                id="country"
                placeholder="Country"
                type="text"
                className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                {...register("location.country", {
                  required: "This field is required",
                })}
              />
            </div>
            <textarea
              id="description"
              placeholder="Description"
              rows={4}
              cols={5}
              className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-white 
                       border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      mt-2
                    `}
              {...register("description", {
                required: "This field is required",
              })}
            />
            <button className="py-3 px-3 text-md text-Blueviolet font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default AddHotel;
