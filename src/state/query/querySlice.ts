import { createSlice } from "@reduxjs/toolkit";
interface queryState {
  query: string;
  queryType: string;
}

const initialState: queryState = {
  query: "",
  queryType: "",
};

const QuerySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      if (state.query != action.payload) state.query = action.payload;
    },
    setQueryTypeUsers: (state) => {
      if (state.queryType !== "users") state.queryType = "users";
    },
    setQueryTypeRepos: (state) => {
      if (state.queryType !== "repositories") state.queryType = "repositories";
    },
  },
});

export const { setQuery, setQueryTypeRepos, setQueryTypeUsers } =
  QuerySlice.actions;

export default QuerySlice.reducer;
