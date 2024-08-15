import { Input, Select, Flex, Form } from "antd";
import "./SearchBar.css";
import { fetchUsers } from "../api/fetchUsers";

interface formValues {
  search_query: string;
  search_type: string;
}

function SearchBar() {
  const [form] = Form.useForm();

  const handleInputChange = (
    changedFields: Partial<formValues>,
    allFields: formValues
  ) => {
    try {
      if (allFields.search_type == "users") {
        const query = allFields.search_query;
        fetchUsers(query);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form className="search-bar" form={form} onValuesChange={handleInputChange}>
      <Flex justify="space-between">
        <Form.Item name="search-query">
          <Input placeholder="Start typing to search .." />
        </Form.Item>
        <Form.Item name="search-type">
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
