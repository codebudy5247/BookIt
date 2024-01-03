import { createSlice } from "@reduxjs/toolkit";
import { Ibooking } from "../../types/booking";

const initialStateVal: Ibooking = {
  hotel: {
    id: "",
    name: "",
    location: "",
  },
  checkIn: new Date(),
  checkOut: new Date(),
  stayLength: 0,
  noOfGuest: 0,
  totalPrice: 0,
  payment: {
    paymentIntentId: "",
    clientSecret: "",
  },
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState: initialStateVal,
  reducers: {
    bookingDetails: (state, action) => {
      const {
        hotel: { id, name, location },
        checkIn,
        checkOut,
        stayLength,
        noOfGuest,
        totalPrice,
        payment: { paymentIntentId, clientSecret },
      } = action.payload;

      return {
        ...state,
        hotel: {
          id,
          name,
          location,
        },
        checkIn,
        checkOut,
        stayLength,
        noOfGuest,
        totalPrice,
        payment: { paymentIntentId, clientSecret },
      };
    },
  },
});

export const { bookingDetails } = bookingSlice.actions;

export default bookingSlice.reducer;
