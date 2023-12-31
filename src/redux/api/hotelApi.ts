import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HotelResponse, HotelRoomResponse } from "../../types/hotel";
import {
  PaymentIntentResponse,
  PaymentIntentInput,
  BookingResponse,
  CreateBookingInput,
} from "../../types/booking";

const baseUrl = import.meta.env.VITE_API_KEY

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
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
          credentials: "include",
        };
      },
      transformResponse: (results: { data: { bookings: BookingResponse[] } }) =>
        results.data.bookings,
    }),
    createBooking: builder.mutation<BookingResponse, CreateBookingInput>({
      query(data) {
        return {
          url: "/booking",
          method: "POST",
          credentials: "include",
          body: data,
        };
      },
    }),
    getUserBookings: builder.query<BookingResponse[], void>({
      query() {
        return {
          url: `/users/bookings`,
          credentials: "include",
        };
      },
      transformResponse: (results: { data: { userBookings: BookingResponse[] } }) =>
        results.data.userBookings,
    }),
    // Payment API
    createPaymentIntent: builder.mutation<
      PaymentIntentResponse,
      PaymentIntentInput
    >({
      query: ({ id, totalAmount }) => ({
        url: `booking/${id}/payment`,
        method: "POST",
        credentials: "include",
        body: totalAmount,
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelQuery,
  useGetHotelRoomsQuery,
  useGetBookingsQuery,
  useCreatePaymentIntentMutation,
  useCreateBookingMutation,
  useGetUserBookingsQuery
} = hotelApi;
