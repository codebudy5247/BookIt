import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HotelResponse,HotelRoomResponse } from "../../types/hotel";

const BASE_URL = "http://localhost:1337";

export const hotelApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
  }),
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
      // providesTags: (result, error, id) => [{ type: 'Hotels', id }],
    }),
    getHotelRooms: builder.query<HotelRoomResponse[], string>({
      query(id) {
        return {
          url: `/hotel/rooms/${id}`,
        };
      },
      // providesTags: (result, error, id) => [{ type: 'Hotels', id }],
    }),
  }),
});

export const { useGetHotelsQuery,useGetHotelQuery,useGetHotelRoomsQuery } = hotelApi;
