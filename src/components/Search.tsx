import { useState } from "react";
import { Icon } from "@iconify/react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const Search = () => {
  const [dates, setDates] = useState([
    {
      startDate: new Date(), // Initial start date
      endDate: new Date(), // Initial end date
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  console.log(dates);

  return (
    <>
      <section className="bg-white shadow-xl px-4 py-3 rounded-lg mt-5">
        <div className="container mx-auto flex gap-2 flex-wrap justify-between items-center">
          <div className="flex items-center">
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
                  placeholder="Destination"
                  type="text"
                  className={`
                      peer
                      w-full
                      p-3
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
            {/* Select Date */}
            <div className="flex items-center gap-4">
              <Icon icon="mdi:calendar-outline" width={30} height={30} />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="text-Blueviolet cursor-pointer"
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item: any) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  minDate={new Date()}
                  className="absolute top-[180px] z-20"
                />
              )}
            </div>
          </div>
          <div
            className="
              p-2 
              bg-Blueviolet
              rounded-full 
              text-white
              cursor-pointer
            "
          >
            <Icon icon="material-symbols:search" height={30} width={30} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
