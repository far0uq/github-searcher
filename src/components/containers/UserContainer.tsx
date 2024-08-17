import User from "../../interface/userInterface";
import UserCard from "../cards/UserCard";
import { Flex } from "antd";

function UserContainer({ users }: { users: Array<User> }) {
  return (
    <Flex wrap gap="small">
      {users ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <div>loading users...</div>
      )}
    </Flex>
  );
}

export default UserContainer;
