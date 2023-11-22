import { useGetHotelsQuery } from "../redux/api/hotelApi";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function capitalizeFirstLetter(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const HotelList = () => {
  const { data, isLoading, isError } = useGetHotelsQuery();
  console.log({ data, isLoading, isError });

  if (isLoading) return <Loader />;

  return (
    <div className="grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {data?.length! > 0 &&
        data?.map((hotel) => (
          <div key={hotel._id}>
            <Link to={`/hotel/${hotel._id}`}>
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
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HotelList;

