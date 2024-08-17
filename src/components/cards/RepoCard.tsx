import { Flex, Button, Card, Divider } from "antd";
import Meta from "antd/es/card/Meta";
import UserCard from "./UserCard";

const repo = {
  id: 123456789,
  node_id: "MDEwOlJlcG9zaXRvcnkxMjM0NTY3ODk=",
  name: "example-repo",
  full_name: "username/example-repo",
  private: false,
  owner: {
    login: "username",
    id: 987654321,
    node_id: "MDQ6VXNlcjk4NzY1NDMyMQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/987654321?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/username",
    html_url: "https://github.com/username",
    followers_url: "https://api.github.com/users/username/followers",
    following_url:
      "https://api.github.com/users/username/following{/other_user}",
    gists_url: "https://api.github.com/users/username/gists{/gist_id}",
    starred_url: "https://api.github.com/users/username/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/username/subscriptions",
    organizations_url: "https://api.github.com/users/username/orgs",
    repos_url: "https://api.github.com/users/username/repos",
    events_url: "https://api.github.com/users/username/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/username/received_events",
    type: "User",
    site_admin: false,
  },
  html_url: "https://github.com/username/example-repo",
  description: "A description of the repository",
  fork: false,
  url: "https://api.github.com/repos/username/example-repo",
  forks_url: "https://api.github.com/repos/username/example-repo/forks",
  keys_url: "https://api.github.com/repos/username/example-repo/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/username/example-repo/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/username/example-repo/teams",
  hooks_url: "https://api.github.com/repos/username/example-repo/hooks",
  issue_events_url:
    "https://api.github.com/repos/username/example-repo/issues/events{/number}",
  events_url: "https://api.github.com/repos/username/example-repo/events",
  assignees_url:
    "https://api.github.com/repos/username/example-repo/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/username/example-repo/branches{/branch}",
  tags_url: "https://api.github.com/repos/username/example-repo/tags",
  blobs_url:
    "https://api.github.com/repos/username/example-repo/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/username/example-repo/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/username/example-repo/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/username/example-repo/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/username/example-repo/statuses/{sha}",
  languages_url: "https://api.github.com/repos/username/example-repo/languages",
  stargazers_url:
    "https://api.github.com/repos/username/example-repo/stargazers",
  contributors_url:
    "https://api.github.com/repos/username/example-repo/contributors",
  subscribers_url:
    "https://api.github.com/repos/username/example-repo/subscribers",
  subscription_url:
    "https://api.github.com/repos/username/example-repo/subscription",
  commits_url:
    "https://api.github.com/repos/username/example-repo/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/username/example-repo/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/username/example-repo/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/username/example-repo/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/username/example-repo/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/username/example-repo/compare/{base}...{head}",
  merges_url: "https://api.github.com/repos/username/example-repo/merges",
  archive_url:
    "https://api.github.com/repos/username/example-repo/{archive_format}{/ref}",
  downloads_url: "https://api.github.com/repos/username/example-repo/downloads",
  issues_url:
    "https://api.github.com/repos/username/example-repo/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/username/example-repo/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/username/example-repo/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/username/example-repo/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/username/example-repo/labels{/name}",
  releases_url:
    "https://api.github.com/repos/username/example-repo/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/username/example-repo/deployments",
  created_at: "2021-01-01T00:00:00Z",
  updated_at: "2024-08-16T00:00:00Z",
  pushed_at: "2024-08-16T00:00:00Z",
  git_url: "git://github.com/username/example-repo.git",
  ssh_url: "git@github.com:username/example-repo.git",
  clone_url: "https://github.com/username/example-repo.git",
  svn_url: "https://github.com/username/example-repo",
  homepage: "https://example.com",
  size: 1234,
  stargazers_count: 100,
  watchers_count: 50,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 10,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: 5,
  license: {
    key: "mit",
    name: "MIT License",
    spdx_id: "MIT",
    url: "https://opensource.org/licenses/MIT",
    node_id: "MDc6TGljZW5zZTEz",
  },
  allow_forking: true,
  is_template: false,
  topics: ["example", "github", "api"],
  visibility: "public",
  forks: 10,
  open_issues: 5,
  watchers: 50,
  default_branch: "main",
};

const { owner } = repo;

function RepoCard() {
  return (
    <div>
      <Card style={{ width: "fit-content" }}>
        <Flex gap="large">
          <UserCard user={owner} />

          <Card style={{ fontSize: "13px" }}>
            <Flex gap="large">
              <Meta title={repo.name} description={repo.full_name} />
              <Meta title="Description" description={repo.description} />
              <Meta title="Stars" description={repo.stargazers_count} />
              <Meta title="Watchers" description={repo.watchers_count} />
              <Meta title="Forks" description={repo.forks_count} />
              <Meta title="Open Issues" description={repo.open_issues_count} />
              <Meta title="License" description={repo.license?.name} />
              <Meta title="Created At" description={repo.created_at} />
              <Meta title="Updated At" description={repo.updated_at} />
              <Button type="primary" href={repo.html_url}>
                Visit Repository
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Card>
    </div>
  );
}

export default RepoCard;
