import { Octokit } from "octokit";

export function fetchUsers(username:string) {
    const octokit = new Octokit({
      auth: import.meta.env.API_TOKEN,
    });

    try {
        const resp = await octokit.request("GET /search/users", {
          q: username,
        });

        const logins: User[] = resp.data.items;

        console.log(logins);
        setUsers(logins);
      } catch (error) {
        console.error(error);
      }
    };
}