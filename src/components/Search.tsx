import { useState } from "react";
import Select from "react-select";
import { _city } from "../data/_city";
const options = [
  { value: "Basic_room", label: "Basic Room" },
  { value: "luxury_room", label: "Luxury Room" },
  { value: "suite", label: "Suite" },
];

const Search = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <section className="bg-paleblue px-4 py-6 rounded-lg mt-5">
        <div className="container mx-auto flex gap-2 flex-wrap justify-between items-center">
          {/* Search Bar */}
          <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
              <div className="w-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  id="search"
                  placeholder="Search by city..."
                  type="text"
                  className={`
                      peer
                      w-full
                      p-4
                      pt-4
                      pl-10
                      font-light 
                      bg-white 
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
                />
              </div>
            </div>

          {/* Room Type Select */}
          <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
            <Select
              placeholder="Select Room Types"
              isClearable
              options={options}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              formatOptionLabel={(option: any) => (
                <div
                  className="
          flex flex-row items-center gap-3"
                >
                  <div>{option.flag}</div>
                  <div>
                    {option.label},
                    <span className="text-neutral-500 ml-1">
                      {option.region}
                    </span>
                  </div>
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
                  primary25: "#ffe4e6",
                },
              })}
            />
          </div>
          {/* Select City */}
          {/* <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
            <Select
              placeholder="Select City"
              isClearable
              options={_city}
              defaultValue={selectedCity}
              onChange={setSelectedCity}
              formatOptionLabel={(option: any) => (
                <div
                  className="
          flex flex-row items-center gap-3"
                >
                  <div>
                    {option.name},
                    <span className="text-neutral-500 ml-1">
                      {option.state}
                    </span>
                  </div>
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
                  primary25: "#ffe4e6",
                },
              })}
            />
          </div> */}

          <button
            className="text-Blueviolet text-lg font-medium py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
            // onClick={() => navigate("/hotels")}
          >
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default Search;
