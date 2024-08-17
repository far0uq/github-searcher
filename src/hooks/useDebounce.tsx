import lodash from "lodash";
import User from "../interface/userInterface";
import { useDispatch } from "react-redux";

function useDebounce(): {
  debounceFetch: (
    callback: (username: string) => Promise<User[]>,
    timeout: number
  ) => lodash.DebouncedFunc<(username: string) => Promise<void>>;
} {
  const dispatch = useDispatch();
  const debounceFetch = (
    callback: (username: string) => Promise<User[]>,
    timeout: number
  ): lodash.DebouncedFunc<(username: string) => Promise<void>> => {
    return lodash.debounce(async (username) => {
      try {
        const users = await callback(username);
        dispatch({ type: "users/setUsers", payload: users });
      } catch (e) {
        console.error(e);
      }
    }, timeout);
  };

  return { debounceFetch };
}

export default useDebounce;
