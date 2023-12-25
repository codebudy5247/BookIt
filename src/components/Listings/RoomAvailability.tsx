import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetHotelRoomsQuery } from "../../redux/api/hotelApi";
import Loader from "../Loader";
import { Icon } from "@iconify/react";
import Select from "react-select";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { HotelRoomResponse } from "../../types/hotel";
import { useAppSelector } from "../../redux/hook";

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

const options = [
  { value: "basic", label: "Basic Room" },
  { value: "luxury", label: "Luxury Room" },
  { value: "suite", label: "Suite" },
];

const noOfRoomsOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const RoomAvailability = (props: any) => {
  const navigate = useNavigate();
  const searchDetails = useAppSelector((state) => state.searchState.searchData);
  const {
    data: hotelRooms,
    isError,
    isLoading,
  } = useGetHotelRoomsQuery(props?.hotelID);
  const [selectedRoomType, setSelectedRoomType] = useState<any>(null);
  const [noOfGuest, setNoOfGuest] = useState<any>(null);
  const [dates, setDates] = useState([
    {
      startDate: new Date(), // checkIn Date
      endDate: new Date(), // checkOut Date
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState<HotelRoomResponse[]>();

  const filterRooms = (
    roomType: string | undefined,
    maxPeople: number | undefined
  ) => {
    let filtered = hotelRooms;

    if (roomType !== undefined) {
      filtered = filtered?.filter((room) => room.roomType === roomType);
    }

    if (maxPeople !== undefined) {
      filtered = filtered?.filter((room) => room.maxPeople >= maxPeople);
    }

    setFilteredRooms(filtered);
  };

  useEffect(() => {
    filterRooms(selectedRoomType?.value, noOfGuest?.value);
  }, [hotelRooms, selectedRoomType, noOfGuest]);

  const handleProceed = () => {
    navigate(`/hotel/${props?.hotelID}/booking`);
  };

  if (isError)
    return (
      <h1 className="font-bold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;
  return (
    <>
      <h2 className="font-bold text-3xl mb-4">Availability</h2>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
            <Select
              placeholder="Select Room Types"
              isClearable
              options={options}
              defaultValue={selectedRoomType}
              onChange={setSelectedRoomType}
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

          <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
            <Select
              placeholder="Select Number of Guest"
              isClearable
              options={noOfRoomsOptions}
              defaultValue={noOfGuest}
              onChange={setNoOfGuest}
              formatOptionLabel={(option: any) => (
                <div
                  className="
          flex flex-row items-center gap-3"
                >
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

          <div className="flex items-center gap-4">
            <Icon icon="mdi:calendar-outline" width={30} height={30} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="text-Blueviolet font-bold cursor-pointer"
            >{`${format(searchDetails.checkInDate, "MM/dd/yyyy")} to ${format(
              searchDetails.checkOutDate,
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
      </div>

      <div className="mt-5">
        {filteredRooms && filteredRooms?.length === 0 ? (
          <h1 className="mt-5 font-bold text-3xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            No Rooms Available
          </h1>
        ) : (
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
                <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms &&
                filteredRooms.map((room: any, index: any) => (
                  <>
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                        {capitalizeFirstLetter(room?.roomType)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                        <div className="flex">
                          {renderIcons(room?.maxPeople)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                        ₹ {room?.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                        <button className="py-2 px-2 text-sm text-Blueviolet font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet">
                          Select
                        </button>
                        {/* {room?.roomNumbers.map((data: any, index: any) => (
                          <div key={index}>
                            {data?.roomNumber}
                            <input
                              id="selectroom"
                              type="checkbox"
                              disabled={!props?.isAvailable(data)}
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
                        ))} */}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        )}
        {filteredRooms && filteredRooms?.length === 0 ? (
          <></>
        ) : (
          <div className="flex justify-end mt-5">
            <button
              onClick={handleProceed}
              className="py-3 px-3 border border-Blueviolet text-md font-medium bg-semiblueviolet hover:text-white hover:bg-Blueviolet"
            >
              Proceed
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RoomAvailability;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
