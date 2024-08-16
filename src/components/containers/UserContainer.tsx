import User from "../../interface/userInterface";
import UserCard from "../cards/UserCard";
import { Flex } from "antd";

function UserContainer({ users }: { users: Array<User> }) {
  return (
    <Flex wrap gap="small">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </Flex>
  );
}

export default UserContainer;
