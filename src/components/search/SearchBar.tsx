import { Input, Select, Flex, Form } from "antd";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../hooks/useDebounce";
import { RootState } from "../../state/store";
import React from "react";
import lodash from "lodash";
import fetchData from "../../api/fetchAPI";
import {
  setQueryTypeRepos,
  setQueryTypeUsers,
} from "../../state/query/querySlice";

const querytypeUser = "users";
const querytypeRepo = "repositories";

interface FormValues {
  search_query: string;
  search_type: string;
}

const SearchBar = React.memo(function SearchBar() {
  console.log("RE-rendering SearchBar");
  const [form] = Form.useForm();
  const { debounceFetch } = useDebounce();

  const debouncedFunc: lodash.DebouncedFunc<
    (query: string, queryType: string) => Promise<void>
  > = debounceFetch(fetchData, 4000);

  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const repos = useSelector((state: RootState) => state.repos.repos);

  const handleInputChange = async (
    changedFields: Partial<FormValues>,
    allFields: FormValues
  ) => {
    console.log(allFields);
    try {
      if (allFields.search_query.length < 3) {
        console.log("Cancellation triggered");
        debouncedFunc("cancel", allFields.search_type);

        if (users.length > 0) {
          dispatch({ type: "users/clearUsers" });
        }
        if (repos.length > 0) {
          dispatch({ type: "repos/clearRepos" });
        }
      } else {
        if (allFields.search_type == querytypeUser) {
          console.log("searching for users");
          dispatch(setQueryTypeUsers());
        } else if (allFields.search_type == querytypeRepo) {
          console.log("searching for repositories");
          dispatch(setQueryTypeRepos());
        }
        const query = allFields.search_query;
        debouncedFunc(query, allFields.search_type);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form className="search-bar" form={form} onValuesChange={handleInputChange}>
      <Flex justify="space-between">
        <Form.Item name="search_query">
          <Input
            className="search-query"
            placeholder="Start typing to search .."
          />
        </Form.Item>
        <Form.Item name="search_type">
          <Select
            placeholder="Users"
            options={[
              { value: "users", label: "Users" },
              { value: "repositories", label: "Repositories" },
            ]}
          />
        </Form.Item>
      </Flex>
    </Form>
  );
});

export default SearchBar;
