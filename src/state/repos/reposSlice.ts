import { createSlice } from "@reduxjs/toolkit";
import { Repo } from "../../interface/repoInterface";

interface repoState {
  repos: Repo[];
}

const initialState: repoState = {
  repos: [],
};

const ReposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
    },
    clearRepos: (state) => {
      state.repos = [];
    },
  },
});

export const { setRepos, clearRepos } = ReposSlice.actions;

export default ReposSlice.reducer;
