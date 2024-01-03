import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { IUser } from "../types/user";
import { Ibooking } from "../types/booking";

type Props = {
  currentUser: IUser;
  paymentIntent: Ibooking;
};

const CheckoutForm = ({ currentUser, paymentIntent }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 rounded-lg shadow-2xl p-5"
    >
      <span className="text-3xl font-bold">Confirm Your Details</span>
      <div className="grid md:grid-cols-[3fr_3fr] gap-4">
        <input
          id="search"
          placeholder="Destination"
          type="text"
          disabled
          defaultValue={currentUser.name}
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
          defaultValue={currentUser.email}
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
        <h2 className="text-xl font-semibold">Your Price Summary</h2>

        <div className="bg-semiblueviolet p-4 rounded-md">
          <div className="font-semibold text-lg">Total Cost: £{2899}</div>
          <div className="text-xs">Includes taxes and charges</div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold"> Payment Details</h3>
        <CardElement
          id="payment-element"
          className="border rounded-md p-2 text-sm"
        />
      </div>

      <div className="flex justify-end">
        <button
          //   disabled
          type="submit"
          className="bg-semiblueviolet text-Blueviolet p-2 font-bold hover:text-white hover:bg-Blueviolet text-md disabled:bg-grey500 disabled:text-lightgray"
        >
          {/* {isLoading ? "Saving..." : "Confirm Booking"} */}
          Confirm Booking
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
