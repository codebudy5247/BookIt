import { createApi } from "@reduxjs/toolkit/query/react";
import { HotelResponse,HotelRoomResponse } from "../../types/hotel";
import customFetchBase from './customFetchBase';

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: customFetchBase,
  tagTypes: ["Hotels"],
  endpoints: (builder) => ({
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
      providesTags: (result, error, id) => [{ type: 'Hotels', id }],
    }),
    getHotelRooms: builder.query<HotelRoomResponse[], string>({
      query(id) {
        return {
          url: `/hotel/rooms/${id}`,
        };
      },
      providesTags: (result, error, id) => [{ type: 'Hotels', id }],
    }),
  }),
});

export const { useGetHotelsQuery,useGetHotelQuery,useGetHotelRoomsQuery } = hotelApi;
