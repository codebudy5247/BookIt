import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HotelResponse } from "../../types/hotel";

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
  }),
});

export const { useGetHotelsQuery } = hotelApi;
