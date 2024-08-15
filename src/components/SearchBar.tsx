import { Input, Select, Flex, Form } from "antd";
import "./SearchBar.css";

function SearchBar() {
  const [form] = Form.useForm();

  const handleInputChange = ({values: string}) => {
    console.log(values);
    // if (values.length >= 3) {
    //   fetchUsers(value);
    // }
  };

  return (
    <Form className="search-bar" form={form} onChange={handleInputChange}>
      <Flex justify="space-between">
        <Form.Item name="search-query">
          <Input
            placeholder="Start typing to search .."
            style={{ width: "67%", marginRight: 10 }}
          />
        </Form.Item>
        <Form.Item name="search-type">
          <Select
            style={{ width: "30%" }}
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
