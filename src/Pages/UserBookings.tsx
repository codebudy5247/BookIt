import Container from "../components/Container";
import {
  useGetUserBookingsQuery,
  useGetHotelQuery,
} from "../redux/api/hotelApi";
import { PuffLoader } from "react-spinners";
import Loader from "../components/Loader";
import { format, parseISO } from "date-fns";

const GetHotel = (props: any) => {
  const { data, isLoading } = useGetHotelQuery(props.id);
  if (isLoading) return <PuffLoader size={50} color="blue" />;
  return <>{`${data?.name},${data?.location?.city}`}</>;
};

const UserBookings = () => {
  const { data: UserBookings, isLoading, isError } = useGetUserBookingsQuery();

  if (isError)
    return (
      <h1 className="mt-10 font-bold text-5xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Something went wrong.Try after sometime!
      </h1>
    );
  if (isLoading) return <Loader />;
  return (
    <div>
      <Container>
        <h1 className="font-extrabold text-center text-5xl text-Blueviolet mt-5 underline">
          Bookings
        </h1>

        {UserBookings && UserBookings?.length === 0 ? (
          <h1 className="mt-10 font-bold text-3xl text-center text-Blueviolet bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            No Rooms Available
          </h1>
        ) : (
          <table className="w-full border-1 border-lightgray mt-10">
            <thead className="bg-semiblueviolet">
              <tr>
                <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                  Hotel
                </th>
                <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-3 border-b-2 border-lightgray text-left text-xs font-semibold text-gray500 uppercase tracking-wider">
                  Booking Date
                </th>
              </tr>
            </thead>
            <tbody>
              {UserBookings &&
                UserBookings.map((booking: any, index: any) => (
                  <>
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray text-Blueviolet">
                        <GetHotel id={booking?.hotel} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray text-Blueviolet">
                        {format(parseISO(booking?.checkIn), "MM/dd/yyyy")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray text-Blueviolet">
                        {format(parseISO(booking?.checkOut), "MM/dd/yyyy")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-lightgray text-Blueviolet">
                        {format(
                          parseISO(booking?.createdAt),
                          "MM/dd/yyyy, HH:mm"
                        )}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        )}
      </Container>
    </div>
  );
};

export default UserBookings;
