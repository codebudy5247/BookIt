import { useState } from "react";
import { useGetHotelRoomsQuery } from "../../redux/api/hotelApi";
import Loader from "../Loader";
import { Icon } from "@iconify/react";
import Select from "react-select";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

const options = [
  { value: "Basic_room", label: "Basic Room" },
  { value: "luxury_room", label: "Luxury Room" },
  { value: "suite", label: "Suite" },
];

const RoomAvailability = (props: any) => {
  const { data, isError, isLoading } = useGetHotelRoomsQuery(props?.hotelID);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dates, setDates] = useState([
    {
      startDate: new Date(), // Initial start date
      endDate: new Date(), // Initial end date
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  console.log({ openDate, dates });

  const renderIcons = (num: any) => {
    const icons = [];
    for (let i = 0; i < num; i++) {
      icons.push(
        <span key={i}>
          <Icon icon="ic:baseline-person" height={30} width={30} />
        </span>
      );
    }
    return icons;
  };

  if (isError)
    return (
      <h1 className="font-extrabold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;
  return (
    <>
      <h2 className="font-bold text-3xl mb-4">Availability</h2>

      <div className="flex items-center gap-10">
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
                primary25: "#ffe4e6",
              },
            })}
          />
        </div>

        <div className="flex items-center gap-4">
          <Icon icon="mdi:calendar-outline" width={30} height={30} />
          <span
            onClick={() => setOpenDate(!openDate)}
            className="text-Blueviolet font-bold cursor-pointer"
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
              className="absolute mt-[430px]"
            />
          )}
        </div>
      </div>

      <div className="mt-5">
        <table className="w-full border-1 border-lightgray">
          <thead className="bg-semiblueviolet">
            <tr>
              <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                Room type
              </th>
              <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                Number of guests
              </th>
              <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                Select Room
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((room: any) => (
                <>
                  <tr key={room._id}>
                    <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                      {capitalizeFirstLetter(room?.roomType)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                      <div className="flex">{renderIcons(room?.maxPeople)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                      ₹ {room?.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                      {room?.roomNumbers.map((data: any) => (
                        <div className="">
                          {data?.roomNumber}
                          <input
                            id="selectroom"
                            type="checkbox"
                            className={`
                      peer
                      w-full
                      p-4
                      pt-4
                      pl-5
                      font-light 
                      bg-white 
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      mb-3
                    `}
                          />
                        </div>
                      ))}
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RoomAvailability;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
