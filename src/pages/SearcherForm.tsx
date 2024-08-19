import { Switch, Flex, Space } from "antd";
import "./SearcherForm.css";
import SearchBar from "../components/search/SearchBar";
import SearchHeader from "../components/search/SearchHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { toggleDarkMode } from "../state/darkmode/darkModeSlice";
import { useCallback, useState } from "react";
function SearcherForm() {
  const [searchType, setSearchType] = useState("");
  const darkModeIsOn = useSelector((state: RootState) => state.darkmode.isOn);
  const dispatch = useDispatch();

  const setSearchTypeMemoized = useCallback((newSearchType: string) => {
    if (searchType !== newSearchType) setSearchType(newSearchType);
  }, []);

  return (
    <div>
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
            style={{
              fontWeight: "bold",
            }}
            className={darkModeIsOn ? "switch-dark" : "switch-light"}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            size="default"
            onChange={() => dispatch(toggleDarkMode())}
          />
        </Flex>

        <SearchBar />
      </Flex>
      <Space size="large" />
    </div>
  );
}

export default SearcherForm;
