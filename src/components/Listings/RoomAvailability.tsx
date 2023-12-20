import { useState } from "react";
import { useGetHotelRoomsQuery } from "../../redux/api/hotelApi";
import Loader from "../Loader";
import Select from "react-select";

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

const RoomAvailability = (props: any) => {
  const { data, isError, isLoading } = useGetHotelRoomsQuery(props?.hotelID);
  const [selectedOption, setSelectedOption] = useState(null);

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
      <div className="overflow-x-auto">
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
                Select Amount
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
                      {room?.maxPeople}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                      ₹ {room?.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border border-lightgray">
                      <div className="md:1/3 lg:w-auto mb-4 md:mb-0">
                        <Select
                          placeholder="Select Amount"
                          isClearable
                          options={options}
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          formatOptionLabel={(option: any) => (
                            <div
                              className="
          flex flex-row items-center gap-3"
                            > 
                              <div>
                                {option.label}
                                {/* <span className="text-neutral-500 ml-1">
                                  {option.region}
                                </span> */}
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
                              primary25: "rgba(101, 86, 255, 0.15)",
                            },
                          })}
                        />
                      </div>
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
