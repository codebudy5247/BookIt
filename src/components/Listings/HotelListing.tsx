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
    <div className="grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
      {data?.length! > 0 &&
        data?.map((hotel) => (
          <div key={hotel._id}>
            <ListingCard data={hotel} />
            {/* <Link to={`/hotel/${hotel._id}`}>
              <div className="flex flex-col w-full">
                {hotel.images?.[0] && (
                  <img
                    className="rounded-2xl object-cover aspect-square"
                    src={hotel.images?.[0]}
                    alt=""
                  />
                )}
                <h3 className="mt-4 text-lg font-bold text-black">
                  {hotel.name}
                </h3>
                <p className="mt-1 text-md text-gray-500">
                  {capitalizeFirstLetter(hotel?.location?.city)}
                </p>
                <p className="mt-1 font-bold text-sm text-gray-900">
                  ₹ {hotel?.price}
                </p>
              </div>
            </Link> */}
          </div>
        ))}
    </div>
  );
};

export default HotelList;
