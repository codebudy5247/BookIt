import { createApi } from "@reduxjs/toolkit/query/react";
import { IGenericResponse, RegisterUser, LoginUser } from "../../types/user";
import customFetchBase from './customFetchBase';
import { userApi } from "./userApi";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    registerUser: builder.mutation<IGenericResponse, RegisterUser>({
      query(data) {
        return {
          url: "auth/register",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation<
      { access_token: string; status: string },
      LoginUser
    >({
      query(data) {
        return {
          url: "auth/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(userApi.endpoints.getMe.initiate(null));
        } catch (error) {}
      },
    }),
    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: "auth/logout",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
} = authApi;
