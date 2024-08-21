import { useState } from "react";
import fetchData from "../api/fetchAPI";
import User from "../interface/userInterface";

function useInfiniteFetch(): {
  fetchMoreUsers: (
    query: string,
    previousData: User[]
  ) => Promise<User[] | undefined>;
  hasMore: boolean;
  loading: boolean;
} {
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMoreUsers = async (
    query: string,
    previousData: User[]
  ): Promise<User[] | undefined> => {
    console.log("called fetchMore with page ", page);
    if (hasMore === false) {
      console.log("No more data");
      return;
    }

    // If more pages exists
    if (loading) return;
    setLoading(true);
    const newPage = (await fetchData(query, "users", page)) as User[];
    setLoading(false);
    if (newPage && newPage.length > 0) {
      const newUsers = [...previousData, ...newPage];
      setPage((prev) => prev + 1);
      return newUsers;
    } else if (newPage && newPage.length === 0) {
      setHasMore(false);
    }
  };

  return { fetchMoreUsers, hasMore, loading };
}

export default useInfiniteFetch;
