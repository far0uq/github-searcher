import { createSlice } from "@reduxjs/toolkit";

interface queryState {
  queryType: string;
}

const initialState: queryState = {
  queryType: "",
};

const QuerySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQueryTypeUsers: (state) => {
      if (state.queryType !== "users") state.queryType = "users";
    },
    setQueryTypeRepos: (state) => {
      if (state.queryType !== "repositories") state.queryType = "repositories";
    },
  },
});

export const { setQueryTypeRepos, setQueryTypeUsers } = QuerySlice.actions;

export default QuerySlice.reducer;
