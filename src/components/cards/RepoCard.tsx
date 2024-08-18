import { Flex, Card } from "antd";
import UserCard from "./UserCard";
import RepoDetails from "./RepoDetails";
import { Repo } from "../../interface/repoInterface";

function RepoCard({ repo }: { repo: Repo }) {
  const { owner } = repo;
  return (
    <div>
      <Card style={{ width: "fit-content" }}>
        <Flex gap="large">
          <UserCard user={owner} />

          <RepoDetails repo={repo} />
        </Flex>
      </Card>
    </div>
  );
}

export default RepoCard;
