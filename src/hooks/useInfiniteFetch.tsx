import { useState } from "react";
import fetchData from "../api/fetchAPI";
import User from "../interface/userInterface";
import Repo from "../interface/repoInterface";

function useInfiniteFetch(): {
  fetchMoreUsers: (
    query: string,
    queryType: string,
    previousData: (User | Repo)[]
  ) => Promise<(User | Repo)[] | undefined>;
  hasMore: boolean;
  loading: boolean;
} {
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchMoreUsers = async (
    query: string,
    queryType: string,
    previousData: (User | Repo)[]
  ): Promise<(User | Repo)[] | undefined> => {
    console.log("called fetchMore with page ", page);

    if (hasMore === false) {
      console.log("No more data");
      return;
    }

    // If more pages exists
    if (loading) return;
    setLoading(true);

    const newPage = queryType
      ? await fetchData(query, "users", page)
      : await fetchData(query, "repos", page);

    setLoading(false);
    if (newPage && newPage.length > 0) {
      const newData = [...previousData, ...newPage];
      setPage((prev) => prev + 1);
      return newData;
    } else if (newPage && newPage.length === 0) {
      setHasMore(false);
    }
  };

  return { fetchMoreUsers, hasMore, loading };
}

export default useInfiniteFetch;
