import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  isOn: boolean;
}

const initialState: DarkModeState = {
  isOn: false,
};

const DarkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isOn = !state.isOn;
    },
  },
});

export const { toggleDarkMode } = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
