import Container from "../components/Container"
import { useAppSelector } from "../redux/hook";

const Booking = () => {
  const bookingDetails = useAppSelector((state) => state.bookingState);
  console.log({bookingDetails});
  

  return (
    <>
    <Container>
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">
            {`${bookingDetails?.hotel?.name}, ${bookingDetails?.hotel?.location}`}
           
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold"> 
          {bookingDetails?.checkIn?.toDateString()}
          </div>
        </div>
        <div>
          Check-out
          <div className="font-bold">
           {bookingDetails?.checkOut?.toDateString()}
          </div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <div className="font-bold">
            {bookingDetails?.stayLength} nights
        </div>
      </div>

      <div>
        Price{" "}
        <div className="font-bold">
          {bookingDetails?.totalPrice}
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Booking