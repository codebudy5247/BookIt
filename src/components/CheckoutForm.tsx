import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { IUser } from "../types/user";
import { Ibooking } from "../types/booking";
import { toast } from "react-toastify";
import { PuffLoader } from "react-spinners";
import { useState } from "react";
import { CreateBookingInput } from "../types/booking";
import { useCreateBookingMutation } from "../redux/api/hotelApi";

type Props = {
  currentUser: IUser;
  paymentIntent: Ibooking;
};

const CheckoutForm = ({ currentUser, paymentIntent }: Props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState<boolean>();

  // API Create Booking Mutation
  const [createBooking, { isError, error, isSuccess }] =
    useCreateBookingMutation();

  const onSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const result = await stripe.confirmCardPayment(
      paymentIntent?.payment?.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement) as StripeCardElement,
        },
      }
    );
    if (result?.error) {
      toast.error(result.error?.message);
    }
    if (result?.paymentIntent?.status === "succeeded") {
      let payload: CreateBookingInput = {
        checkIn: paymentIntent.checkIn,
        checkOut: paymentIntent.checkOut,
        totalAmount: paymentIntent.totalPrice,
        hotel: paymentIntent.hotel.id,
        selectedRoomType: "suite",
        payment: {
          paymentIntentId: paymentIntent.payment.paymentIntentId,
          clientSecret: paymentIntent.payment.clientSecret,
          paymentStatus: true,
        },
      };
      createBooking(payload)
      toast.success("Payment Successfull");
    }
    setIsLoading(false);
  };
  return (
    <div className="grid grid-cols-1 gap-5 rounded-lg shadow-2xl p-5">
      <span className="text-3xl font-bold text-Blueviolet">Confirm Your Details</span>
      <div className="grid md:grid-cols-[3fr_3fr] gap-4">
        <input
          id="search"
          placeholder="Destination"
          type="text"
          disabled
          defaultValue={currentUser?.name}
          className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-grey500 
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                    `}
        />
        <input
          id="search"
          placeholder="Destination"
          type="text"
          disabled
          defaultValue={currentUser?.email}
          className={`
                      peer
                      w-full
                      p-3
                      font-light 
                      bg-grey500
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      
                    `}
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-Blueviolet">Your Price Summary</h2>

        <div className="bg-semiblueviolet p-4 rounded-md">
          <div className="font-semibold text-lg text-kellygreen">Total Cost: ₹{paymentIntent?.totalPrice}</div>
          <div className="text-xs text-darkgray">Includes taxes and charges.</div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-Blueviolet"> Payment Details</h3>
        <CardElement
          id="payment-element"
          className="border rounded-md p-2 text-sm"
        />
      </div>

      <div className="flex justify-end">
        <button
          disabled={isLoading}
          onClick={onSubmit}
          className="bg-semiblueviolet text-Blueviolet p-2 font-bold hover:text-white hover:bg-Blueviolet text-md disabled:bg-grey500 disabled:text-lightgray"
        >
          {isLoading ? (
            <PuffLoader size={50} color="blue" />
          ) : (
            "Confirm Booking"
          )}
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
