import { Flex, Card } from "antd";
import UserCard from "./UserCard";
import RepoDetails from "./RepoDetails";
import { Repo } from "../../interface/repoInterface";

function RepoCard({ repo }: { repo: Repo }) {
  const { owner } = repo;
  return (
    <div style={{ width: "50vw" }}>
      <Card style={{ width: "fit-content", borderRadius: 10 }} bordered={false}>
        <Flex gap="large">
          <UserCard user={owner} />

          <RepoDetails repo={repo} />
        </Flex>
      </Card>
    </div>
  );
}

export default RepoCard;
