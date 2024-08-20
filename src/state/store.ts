import { configureStore } from "@reduxjs/toolkit";
import darkmodeReducer from "./darkmode/darkModeSlice";
import usersReducer from "./users/usersSlice";
import reposReducer from "./repos/reposSlice";
import queryReducer from "./query/querySlice";
import loadingSlice from "./loading/loadingSlice";

export const store = configureStore({
  reducer: {
    darkmode: darkmodeReducer,
    users: usersReducer,
    repos: reposReducer,
    query: queryReducer,
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
