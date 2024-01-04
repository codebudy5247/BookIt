import Container from "../components/Container";
import { useAppSelector } from "../redux/hook";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
const Booking = () => {
  const bookingDetails = useAppSelector((state) => state.bookingState);
  const userDetails = useAppSelector((state) => state.userState.user);
  console.log({ bookingDetails, userDetails });

  const stripePromise = loadStripe(
    "pk_test_51IAXt8BGsIvgSdruzeHYkk1VetjBggGpVk9DqFXYD0QeD47akLZ6KIsfUyOrzknmjSdxIof9rxHXOWO4nf7NQ4It005Qf3NRhx"
  );

  return (
    <>
      <Container>
        <div className="grid md:grid-cols-[3fr_3fr] gap-4">
          {/* Booking Summary */}
          <div className="grid gap-4 rounded-lg shadow-2xl p-5 h-fit">
            <h2 className="text-xl font-bold text-Blueviolet">Your Booking Details</h2>
            <div className="border-b py-2">
              Location:
              <div className="font-bold text-darkgray">
                {`${bookingDetails?.hotel?.name}, ${bookingDetails?.hotel?.location}`}
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                Check-in
                <div className="font-bold text-darkgray">
                  {bookingDetails?.checkIn?.toDateString()}
                </div>
              </div>
              <div>
                Check-out
                <div className="font-bold text-darkgray">
                  {bookingDetails?.checkOut?.toDateString()}
                </div>
              </div>
            </div>
            <div className="border-t border-b py-2">
              Total length of stay:
              <div className="font-bold text-darkgray">
                {bookingDetails?.stayLength} nights
              </div>
            </div>

            <div>
              Price{" "}
              <div className="font-bold text-darkgray">₹{bookingDetails?.totalPrice}</div>
            </div>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              clientSecret: bookingDetails.payment.clientSecret,
            }}
          >
            <CheckoutForm
              currentUser={userDetails!}
              paymentIntent={bookingDetails}
            />
          </Elements>
        </div>
      </Container>
    </>
  );
};

export default Booking;
