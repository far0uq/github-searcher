import { Octokit } from "octokit";
import User from "../interface/userInterface";

export async function fetchUsers(username: string) {
  const octokit = new Octokit({
    auth: import.meta.env.API_TOKEN,
  });
  try {
    const resp = await octokit.request("GET /search/users", {
      q: username,
    });
    console.log(resp.data.items);
    return resp.data.items as User[];
  } catch (error) {
    console.error(error);
    const emptyUsers = [] as User[];
    return emptyUsers;
  }
}
