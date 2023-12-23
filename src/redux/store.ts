import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { hotelApi } from "./api/hotelApi";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import userReducer from "./features/userSlice";
import searchReducer from "./features/searchSlice"

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
    searchState: searchReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat([
      hotelApi.middleware,
      authApi.middleware,
      userApi.middleware,
    ]),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
