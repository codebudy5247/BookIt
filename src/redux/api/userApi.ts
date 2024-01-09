import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser } from '../features/userSlice';
import customFetchBase from './customFetchBase';
import { IUser } from '../../types/user';

const baseUrl = import.meta.env.VITE_API_KEY

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
      baseUrl: baseUrl,
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
      getMe: builder.query<IUser, null>({
        query() {
          return {
            url: 'users/me',
            credentials: 'include',
          };
        },
        transformResponse: (result: { data: { user: IUser } }) =>
          result.data.user,
        async onQueryStarted(args, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setUser(data));
          } catch (error) {}
        },
      }),
    }),
  });

