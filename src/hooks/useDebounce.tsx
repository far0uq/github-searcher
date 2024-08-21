import lodash from "lodash";
import User from "../interface/userInterface";
import Repo from "../interface/repoInterface";
import {  isRepoInstance } from "../interface/repoInterface";
import { useDispatch } from "react-redux";

function useDebounce(): {
  debounceFetch: (
    callback: (
      query: string,
      queryType: string
    ) => Promise<User[]> | Promise<Repo[]>,
    timeout: number
  ) => lodash.DebouncedFunc<
    (query: string, queryType: string) => Promise<void>
  >;
} {
  const dispatch = useDispatch();
  const debounceFetch = (
    callback: (
      query: string,
      queryType: string
    ) => Promise<User[]> | Promise<Repo[]>,
    timeout: number
  ): lodash.DebouncedFunc<
    (query: string, queryType: string) => Promise<void>
  > => {
    return lodash.debounce(async (query, queryType) => {
      try {
        console.log(query);
        if (query != "cancel") {
          const result = await callback(query, queryType);
          // Check type of result before storing to either users or repos
          console.log(result[0]);
          if (isRepoInstance(result[0])) {
            console.log("setting repos");
            dispatch({ type: "repos/setRepos", payload: result });
          } else {
            console.log("setting users");
            dispatch({ type: "users/setUsers", payload: result });
          }
          dispatch({ type: "loading/setDataNotLoading" });
        } else {
          console.log("cancelled");
        }
      } catch (e) {
        console.error(e);
      }
    }, timeout);
  };

  return { debounceFetch };
}

export default useDebounce;
