import { Card, Button, Divider, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import { Repo } from "../../interface/repoInterface";

function RepoDetails({ repo }: { repo: Repo }) {
  return (
    <Card style={{ fontSize: "13px", alignContent: "center", width: "80%" }}>
      <Flex justify="space-between">
        <Meta title={repo.name} description={repo.full_name} />
        <Button type="primary" href={repo.html_url}>
          Visit Repository
        </Button>
      </Flex>

      <Divider />
      <Flex gap="large">
        <Meta
          title="Description"
          description={repo.description}
          style={{ width: "10%" }}
        />
        <Meta title="Stars" description={repo.stargazers_count} />
        <Meta title="Watchers" description={repo.watchers_count} />
        <Meta title="Forks" description={repo.forks_count} />
        <Meta title="Open Issues" description={repo.open_issues_count} />
        <Meta title="Created At" description={repo.created_at} />
        <Meta title="Updated At" description={repo.updated_at} />
      </Flex>
    </Card>
  );
}

export default RepoDetails;
