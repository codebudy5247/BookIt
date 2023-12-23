import { HotelResponse } from "../../types/hotel";
import Loader from "../Loader";
import ListingCard from "./ListingCard";
import { useAppSelector } from "../../redux/hook";

interface propTypes {
  hotels: HotelResponse[];
  isLoading: boolean;
  isError: boolean;
}

const filterData = (query: any, data: HotelResponse[]) => {
  if (!query) {
    return data;
  } else {
    console.log(query);
    let filteredData = data.filter(
      (d: any) =>
        d?.location?.state?.toLowerCase().includes(query) ||
        d?.location?.city?.toLowerCase().includes(query)
    );
    return filteredData;
  }
};

const HotelList = (props: propTypes) => {
  const searchDetails = useAppSelector((state) => state.searchState.searchData);
  const filteredHotelData = filterData(searchDetails.destination, props.hotels);

  if (props.isError)
    return (
      <h1 className="mt-10 font-bold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (props.isLoading) return <Loader />;

  return (
    <div className="grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-5">
      {filteredHotelData.length > 0 &&
        filteredHotelData.map((hotel) => (
          <div key={hotel._id}>
            <ListingCard data={hotel} />
          </div>
        ))}
    </div>
  );
};

export default HotelList;
