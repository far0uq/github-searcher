import lodash from "lodash";
import User from "../interface/userInterface";
import { Repo, isRepoInstance } from "../interface/repoInterface";
import { useDispatch } from "react-redux";

function useDebounce(): {
  debounceFetch: (
    callback: (query: string) => Promise<User[]> | Promise<Repo[]>,
    timeout: number
  ) => lodash.DebouncedFunc<(query: string) => Promise<void>>;
} {
  const dispatch = useDispatch();
  const debounceFetch = (
    callback: (query: string) => Promise<User[]> | Promise<Repo[]>,
    timeout: number
  ): lodash.DebouncedFunc<(username: string) => Promise<void>> => {
    return lodash.debounce(async (query) => {
      try {
        const result = await callback(query);
        // Check type of result before storing to either users or repos
        console.log(result[0]);
        if (isRepoInstance(result[0])) {
          console.log("setting repos");
          dispatch({ type: "repos/setRepos", payload: result });
        } else {
          console.log("setting users");
          dispatch({ type: "users/setUsers", payload: result });
        }
      } catch (e) {
        console.error(e);
      }
    }, timeout);
  };

  return { debounceFetch };
}

export default useDebounce;
