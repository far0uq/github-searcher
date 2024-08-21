import { fetchUsers } from "./fetchUsers";
import { fetchRepos } from "./fetchRepos";
import { Octokit } from "octokit";

export default function fetchData(
  query: string,
  queryType: string,
  page: number = 1
) {
  const octokit = new Octokit({
    auth: import.meta.env.API_TOKEN,
  });
  if (queryType === "users") {
    return fetchUsers(query, page, octokit);
  } else if (queryType === "repositories") {
    return fetchRepos(query, page, octokit);
  }
}
