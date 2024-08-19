import { Input, Select, Flex, Form } from "antd";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../api/fetchUsers";
import { fetchRepos } from "../../api/fetchRepos";
import useDebounce from "../../hooks/useDebounce";
import { RootState } from "../../state/store";
import { useState } from "react";

const querytypeUser = "users";
const querytypeRepo = "repositories";

interface FormValues {
  search_query: string;
  search_type: string;
}

function SearchBar({
  searchType,
  setSearchType,
}: {
  searchType: string;
  setSearchType: (searchType: string) => void;
}) {
  const [form] = Form.useForm();
  const { debounceFetch } = useDebounce();

  let debouncedFunc: (
    query: string
  ) => Promise<void> | undefined = async () => {};

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
        if (users.length > 0) {
          dispatch({ type: "users/clearUsers" });
        }
        if (repos.length > 0) {
          dispatch({ type: "repos/clearRepos" });
        }
      } else if (allFields.search_type == querytypeUser) {
        debouncedFunc = debounceFetch(fetchUsers, 3000);
        setSearchType(querytypeUser);
        console.log("searching for users");
      } else if (allFields.search_type == querytypeRepo) {
        debouncedFunc = debounceFetch(fetchRepos, 3000);
        setSearchType(querytypeRepo);
        console.log("searching for repositories");
      }
      const query = allFields.search_query;
      debouncedFunc(query);
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
}

export default SearchBar;
