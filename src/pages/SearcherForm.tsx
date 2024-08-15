import { Switch, Flex } from "antd";
import "./SearcherForm.css";
import SearchBar from "../components/SearchBar";
import SearchHeader from "../components/SearchHeader";
// import { useState } from "react";
// import { Octokit } from "octokit";
// import { User } from "../types/user";

function SearcherForm() {
  // const [darkMode, setDarkMode] = useState(false);
  // const [users, setUsers] = useState<User[]>([]);

  // const switchStyle = {
  //   border: "1px solid black",
  // };
  // const darkSwitchStyle = {
  //   backgroundColor: "black",
  // };
  // const lightSwitchStyle = {
  //   backgroundColor: "white",
  // };

  // const currentSwitchStyle = {
  //   ...switchStyle,
  //   ...(darkMode ? darkSwitchStyle : lightSwitchStyle),
  // };

  return (
    <Flex justify="center" align="center" className="searcher-form" vertical>
      <Flex align="center" justify="space-between" className="search-header">
        <SearchHeader />

        <Switch
          // style={{ ...currentSwitchStyle }}
          // onChange={() => setDarkMode(!darkMode)}
          checkedChildren="Dark"
          unCheckedChildren="Light"
          size="default"
        />
      </Flex>

      <SearchBar />

      {/* {users.map((user) => (
        <Card>
          <h1>{user.login}</h1>
          <a href={user.html_url}>User Profile</a>
        </Card>
      ))} */}
    </Flex>
  );
}

export default SearcherForm;
