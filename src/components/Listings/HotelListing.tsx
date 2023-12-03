import { useGetHotelsQuery } from "../../redux/api/hotelApi";
import Loader from "../Loader";
import ListingCard from "./ListingCard";

const HotelList = () => {
  const { data, isLoading, isError } = useGetHotelsQuery();

  if (isError)
    return (
      <h1 className="font-extrabold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;

  return (
    <div className="grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 mt-5">
      {data?.length! > 0 &&
        data?.map((hotel) => (
          <div key={hotel._id}>
            <ListingCard data={hotel} />
          </div>
        ))}
    </div>
  );
};

export default HotelList;
