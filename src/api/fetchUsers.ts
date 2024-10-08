import { Octokit } from "octokit";
import User from "../interface/userInterface";

export async function fetchUsers(
  query: string,
  page: number,
  octokit: Octokit
) {
  try {
    const resp = await octokit.request("GET /search/users", {
      q: query,
      per_page: 6,
      page: page,
    });
    console.log(resp.data.items);
    return resp.data.items as User[];
  } catch (error) {
    console.error(error);
    const emptyUsers = [] as User[];
    return emptyUsers;
  }
}
