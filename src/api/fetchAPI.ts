import { fetchUsers } from "./fetchUsers";
import { fetchRepos } from "./fetchRepos";
import { Octokit } from "octokit";

export default function fetchData(query: string, queryType: string) {
  const octokit = new Octokit({
    auth: import.meta.env.API_TOKEN,
  });
  if (queryType == "users") {
    return fetchUsers(query, octokit);
  } else {
    return fetchRepos(query, octokit);
  }
}
