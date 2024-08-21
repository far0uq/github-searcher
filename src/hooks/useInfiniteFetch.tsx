import { useState } from "react";
import fetchData from "../api/fetchAPI";
import User from "../interface/userInterface";

function useInfiniteFetch(): {
  fetchMoreUsers: (
    query: string,
    previousData: User[]
  ) => Promise<User[] | undefined>;
  nextPage: () => void;
  hasMore: boolean;
} {
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreUsers = async (
    query: string,
    previousData: User[]
  ): Promise<User[] | undefined> => {
    console.log("called fetchMore");
    if (hasMore === false) return;

    // If more pages exists
    const newPage = await fetchData(query, "users", page);
    if (newPage.length > 0) {
      const newUsers = [...previousData, ...newPage];
      setPage(page + 1);
      return newUsers;
    } else {
      setHasMore(false);
    }
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return { fetchMoreUsers, nextPage, hasMore };
}

export default useInfiniteFetch;
