import { Input, Select, Flex, Form } from "antd";
import "./SearchBar.css";
import { fetchUsers } from "../../api/fetchUsers";
import useDebounce from "../../hooks/useDebounce";

const querytypeUser = "users";

interface FormValues {
  search_query: string;
  search_type: string;
}

function SearchBar() {
  const [form] = Form.useForm();
  const { debounceFetch } = useDebounce();
  const debouncedFunc = debounceFetch(fetchUsers, 3000);

  const handleInputChange = async (
    changedFields: Partial<FormValues>,
    allFields: FormValues
  ) => {
    console.log(allFields);
    try {
      if (allFields.search_type == querytypeUser) {
        if (allFields.search_query.length >= 3) {
          console.log("searching for users");
          const query = allFields.search_query;
          debouncedFunc(query);
        }
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
}

export default SearchBar;
