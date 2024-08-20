import { createSlice } from "@reduxjs/toolkit";

interface loadingState {
  dataIsLoading: boolean;
}

const initialState: loadingState = {
  dataIsLoading: false,
};

const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setDataLoading: (state) => {
      if (state.dataIsLoading === false) state.dataIsLoading = true;
    },
    setDataNotLoading: (state) => {
      if (state.dataIsLoading === true) state.dataIsLoading = false;
    },
  },
});

export const { setDataLoading, setDataNotLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
