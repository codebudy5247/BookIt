import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { SearchData } from "../redux/features/searchSlice";
const Search = () => {
  const dispatch = useAppDispatch();
  const searchDetails = useAppSelector((state) => state.searchState.searchData);
  const [dates, setDates] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState();

  console.log(destination, "destination.....");
  console.log(dates, "dates.....");

  const handleOnChangeDestination = (e: any) => {
    setDestination(e.target.value);
    dispatch(
      SearchData({
        destination,
        checkInDate: dates[0].startDate,
        checkOutDate: dates[0].endDate,
      })
    );
  };

  const handleOnChangeDates = (item: any) => {
    setDates([item.selection]);
  };

  useEffect(() => {
    dispatch(
      SearchData({
        destination,
        checkInDate: dates[0].startDate,
        checkOutDate: dates[0].endDate,
      })
    );
  }, [destination,dates])
  

  return (
    <>
      <section className="bg-white shadow-lg px-4 py-3 rounded-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-20">
            {/* Search Bar */}
            <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
              <div className="w-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 bottom-0 w-6 h-6 my-auto text-Blueviolet left-3"
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
                  onChange={handleOnChangeDestination}
                  placeholder="Destination"
                  type="text"
                  defaultValue={searchDetails.destination}
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
                <Icon icon="mdi:calendar-outline" width={30} height={30} color="blue" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="text-Blueviolet cursor-pointer"
                >{`${format(
                  searchDetails.checkInDate,
                  "MM/dd/yyyy"
                )} to ${format(
                  searchDetails.checkOutDate,
                  "MM/dd/yyyy"
                )}`}</span>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleOnChangeDates}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                    className="absolute top-[180px] z-20"
                  />
                )}
              </div>
          </div>

          {/* <div
              onClick={handleClickEvent}
              className="
              p-2 
              bg-Blueviolet
              rounded-full 
              text-white
              cursor-pointer
            "
            >
              <Icon icon="material-symbols:search" height={30} width={30} />
            </div> */}
        </div>
      </section>
    </>
  );
};

export default Search;
