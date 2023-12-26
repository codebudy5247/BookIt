import Container from "../components/Container"
import { useLocation } from "react-router-dom";
import { Ibooking } from "../types/booking"

interface CustomState {
  booking: Ibooking;
}
const Booking = () => {
  const location = useLocation();
  const state = location.state as CustomState;

  return (
    <>
    <Container>
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">
            {`${state?.booking?.hotel?.name}, ${state?.booking?.hotel?.location}`}
           
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold"> 
          {state?.booking?.checkIn?.toDateString()}
          </div>
        </div>
        <div>
          Check-out
          <div className="font-bold">
           {state?.booking?.checkOut?.toDateString()}
          </div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <div className="font-bold">
            {state?.booking?.stayLength} nights
        </div>
      </div>

      <div>
        Price{" "}
        <div className="font-bold">
          {state?.booking?.totalPrice}
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Booking