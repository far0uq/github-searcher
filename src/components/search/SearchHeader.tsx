import { Flex, Space } from "antd";
import { GithubFilled } from "@ant-design/icons";

function SearchHeader({ darkModeIsOn }: { darkModeIsOn: boolean }) {
  return (
    <Flex justify="space-between">
      <Space>
        <GithubFilled
          style={{
            fontSize: 40,
            color: darkModeIsOn ? "white" : "black",
          }}
        />

        <Flex vertical>
          <h3 style={darkModeIsOn ? { color: "white" } : { color: "black" }}>
            GitHub Searcher
          </h3>
          <p>Search users or repositories below</p>
        </Flex>
      </Space>
    </Flex>
  );
}

export default SearchHeader;
