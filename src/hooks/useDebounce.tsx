import lodash from "lodash";

function useDebounce(callback: () => void, timeout: number): void {
  const debouncefetch = lodash.debounce(callback, timeout);
  debouncefetch();
}

export default useDebounce;
