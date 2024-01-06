import Layout from "../../components/Admin/Layout";
import { FormProvider, useForm } from "react-hook-form";
import { HotelMutateInput } from "../../types/hotel";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";

const animatedComponents = makeAnimated();

const options = [
  { value: "wifi", label: "Wifi" },
  { value: "kitchen", label: "Kitchen" },
  { value: "ac", label: "AC" },
  { value: "tv", label: "TV" },
  { value: "geyser", label: "Geyser" },
  { value: "powerBackup", label: "Power Backup" },
  { value: "elevator", label: "Elevator" },
  { value: "security", label: "Security" },
  { value: "laundry", label: "Laundry" },
  { value: "freeParking", label: "Free Parking" },
  { value: "gym", label: "Gym" },
  { value: "evCharger", label: "EV Charger" },
];

const AddHotel = () => {
  const [selectedAmenities, setSelectedAmenities] = useState<any>([]);
  const formMethods = useForm<HotelMutateInput>();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    watch,
    setValue,
  } = formMethods;

  const existingImageUrls:any = watch("images");

  console.log(existingImageUrls,"existingImageUrls");
  

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    event.preventDefault();
    setValue(
      "images",
      existingImageUrls.filter((url:any) => url !== imageUrl)
    );
  };

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
              <Select
                placeholder="Select Amenities"
                isClearable
                isMulti
                options={options}
                defaultValue={selectedAmenities}
                onChange={setSelectedAmenities}
                formatOptionLabel={(option: any) => (
                  <div
                    className="
          flex flex-row items-center gap-3"
                  >
                    <div>{option.flag}</div>
                    <div>{option.label}</div>
                  </div>
                )}
                classNames={{
                  control: () => "p-2 border-2",
                  input: () => "text-lg",
                  option: () => "text-lg",
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 6,
                  colors: {
                    ...theme.colors,
                    primary: "black",
                    primary25: "rgba(101, 86, 255, 0.15)",
                  },
                })}
              />
            </div>
            <textarea
              id="description"
              placeholder="Description"
              rows={4}
              cols={3}
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

            {/* Image section */}

            {/* <div>
              <h2 className="text-2xl font-bold mb-3">Images</h2>
              <div className="border rounded p-4 flex flex-col gap-4">
                {existingImageUrls && existingImageUrls.length > 0 && (
                  <div className="grid grid-cols-6 gap-4">
                    {existingImageUrls.map((url:any) => (
                      <div className="relative group" key={url}>
                        <img src={url} className="min-h-full object-cover" />
                        <button
                          onClick={(event) => handleDelete(event, url)}
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="w-full text-gray-700 font-normal"
                  {...register("images", {
                    validate: (imageFiles) => {
                      const totalLength =
                        imageFiles.length + (existingImageUrls?.length || 0);

                      if (totalLength === 0) {
                        return "At least one image should be added";
                      }

                      if (totalLength > 6) {
                        return "Total number of images cannot be more than 6";
                      }

                      return true;
                    },
                  })}
                />
              </div>
              {errors.imageFiles && (
                <span className="text-red text-sm font-bold">
                  {errors.imageFiles.message}
                </span>
              )}
            </div> */}
            <button className="py-3 px-3 text-md text-Blueviolet font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet mt-5">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
};

export default AddHotel;
