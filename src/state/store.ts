import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmode/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
