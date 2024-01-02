import { createApi } from "@reduxjs/toolkit/query/react";
import { HotelResponse, HotelRoomResponse } from "../../types/hotel";
import {
  PaymentIntentResponse,
  PaymentIntentInput,
  BookingResponse,
} from "../../types/booking";
import customFetchBase from "./customFetchBase";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: customFetchBase,
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
    // Hotels API
    getHotels: builder.query<HotelResponse[], void>({
      query() {
        return {
          url: `/hotel`,
        };
      },
      providesTags: [{ type: "Hotels", id: "LIST" }],
      transformResponse: (results: { data: { hotels: HotelResponse[] } }) =>
        results.data.hotels,
    }),
    getHotel: builder.query<HotelResponse, string>({
      query(id) {
        return {
          url: `/hotel/${id}`,
        };
      },
      providesTags: (result, error, id) => [{ type: "Hotels", id }],
    }),
    getHotelRooms: builder.query<HotelRoomResponse[], string>({
      query(id) {
        return {
          url: `/hotel/rooms/${id}`,
        };
      },
      providesTags: (result, error, id) => [{ type: "Hotels", id }],
    }),

    // Bookings API
    getBookings: builder.query<BookingResponse[], void>({
      query() {
        return {
          url: `/booking`,
        };
      },
      transformResponse: (results: { data: { bookings: BookingResponse[] } }) =>
        results.data.bookings,
    }),

    // Payment API
    createPaymentIntent: builder.mutation<
      PaymentIntentResponse,
      { id: string; data: PaymentIntentInput }
    >({
      query({ id, data }) {
        return {
          url: `booking/${id}/payment`,
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelQuery,
  useGetHotelRoomsQuery,
  useGetBookingsQuery,
  useCreatePaymentIntentMutation,
} = hotelApi;
