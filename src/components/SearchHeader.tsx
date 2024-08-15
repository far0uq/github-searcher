import { Flex, Space } from "antd";
import { GithubFilled } from "@ant-design/icons";

function SearchHeader() {
  return (
    <Flex justify="space-between">
      <Space>
        <GithubFilled style={{ fontSize: 40 }} />

        <Flex vertical>
          <h3>GitHub Searcher</h3>
          <p>Search users or repositories below</p>
        </Flex>
      </Space>
    </Flex>
  );
}

export default SearchHeader;
