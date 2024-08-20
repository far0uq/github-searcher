import { useState } from "react";
import fetchData from "../api/fetchAPI";
import User from "../interface/userInterface";
import Repo from "../interface/repoInterface";

function useInfiniteFetch(): {
  fetchMore: (queryType: string, query: string) => Promise<User[] | Repo[]>;
} {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = async (queryType: string, query: string) => {
    if (hasMore) {
      if (queryType === "users") {
        const newPage = await fetchData(query, queryType);
        return newPage;
      }
      setPage(page + 1);
    }
    return [];
  };

  return { fetchMore };
}

export default useInfiniteFetch;
