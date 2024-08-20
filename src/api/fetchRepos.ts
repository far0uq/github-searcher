import { Octokit } from "octokit";
import { Repo } from "../interface/repoInterface";

export async function fetchRepos(query: string, octokit: Octokit) {
  try {
    const resp = await octokit.request("GET /search/repositories", {
      q: query,
    });
    console.log(resp.data.items);
    return resp.data.items as Repo[];
  } catch (error) {
    console.error(error);
    const emptyRepos = [] as Repo[];
    return emptyRepos;
  }
}
