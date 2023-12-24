import Container from "../components/Container"
const Booking = () => {
  return (
    <>
    <Container>
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Your Booking Details</h2>
      <div className="border-b py-2">
        Location:
        <div className="font-bold">
            {/* {`${hotel.name}, ${hotel.city}, ${hotel.country}`} */}
            SPOT ON Janapriya Lodge Near Hare Krishna Hill, Bangalore
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          Check-in
          <div className="font-bold"> 
          {/* {checkIn.toDateString()} */}
          22/12/2023
          </div>
        </div>
        <div>
          Check-out
          <div className="font-bold">
             {/* {checkOut.toDateString()} */}
             22/12/2023
          </div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Total length of stay:
        <div className="font-bold">
            {3} nights
        </div>
      </div>

      <div>
        Guests{" "}
        <div className="font-bold">
          {/* {adultCount} adults & {childCount} children */}
          5
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Booking