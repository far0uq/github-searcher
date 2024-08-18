import { createSlice } from "@reduxjs/toolkit";
import User from "../../interface/userInterface";

interface userState {
  users: User[];
}

const initialState: userState = {
  users: [],
};

const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { setUsers, clearUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
