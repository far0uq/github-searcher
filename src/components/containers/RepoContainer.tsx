import { Flex } from "antd";
import RepoCard from "../cards/RepoCard";
import { Repo } from "../../interface/repoInterface";

function RepoContainer({ repos }: { repos: Array<Repo> }) {
  return (
    <Flex wrap gap="large" justify="center">
      {repos ? (
        repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)
      ) : (
        <div>loading users...</div>
      )}
    </Flex>
  );
}

export default RepoContainer;
