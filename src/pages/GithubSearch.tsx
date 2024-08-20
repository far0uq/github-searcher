import SearcherForm from "../components/search/SearcherForm";
import ResultContainer from "../components/containers/ResultContainer";
import { Flex } from "antd";

function GithubSearch() {
  return (
    <Flex vertical justify="center" style={{ height: "100%" }}>
      <SearcherForm />

      <ResultContainer />
    </Flex>
  );
}

export default GithubSearch;
