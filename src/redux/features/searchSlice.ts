import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SearchState {
  isLoading: boolean;
  searchData: {
    destination: string;
    checkInDate: Date;
    checkOutDate: Date;
  };
  err: any;
}

// Define the initial state using that type
const initialStateVal: SearchState = {
  isLoading: false,
  searchData: {
    destination: "",
    checkInDate: new Date(),
    checkOutDate: new Date(),
  },
  err: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState: initialStateVal,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },
    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.err = action.payload;
    },
    SearchData: (state, action) => {
      state.isLoading = false;
      state.searchData = action.payload;
    },
  },
});

export const { SearchData } = searchSlice.actions;

export default searchSlice.reducer;