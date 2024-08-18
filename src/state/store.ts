import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmode/darkModeSlice";
import usersReducer from "./users/usersSlice";
import reposReducer from "./repos/reposSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    users: usersReducer,
    repos: reposReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
