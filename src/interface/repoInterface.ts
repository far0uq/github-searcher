import User from "./userInterface";

export interface Repo {
  id: number;
  full_name: string;
  name: string;
  html_url: string;
  owner: Partial<User>;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
}

export function isRepoInstance(result: Repo | User): result is Repo {
  return (result as Repo).stargazers_count !== undefined;
}
