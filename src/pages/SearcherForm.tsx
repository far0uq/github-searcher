import { Switch, Flex } from "antd";
import "./SearcherForm.css";
import SearchBar from "../components/SearchBar";
import SearchHeader from "../components/SearchHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { toggleDarkMode } from "../state/darkmode/darkModeSlice";

function SearcherForm() {
  const darkModeIsOn = useSelector((state: RootState) => state.darkmode.isOn);
  const dispatch = useDispatch();

  return (
    <Flex
      justify="center"
      align="center"
      className="searcher-form"
      vertical
      style={
        darkModeIsOn
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" }
      }
    >
      <Flex align="center" justify="space-between" className="search-header">
        <SearchHeader darkModeIsOn={darkModeIsOn} />

        <Switch
          checkedChildren="Dark"
          unCheckedChildren="Light"
          size="default"
          onChange={() => dispatch(toggleDarkMode())}
        />
      </Flex>

      <SearchBar darkModeIsOn={darkModeIsOn} />

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
