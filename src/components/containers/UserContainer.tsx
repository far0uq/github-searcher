import User from "../../interface/userInterface";
import UserCard from "../cards/UserCard";
import { Flex, Row, Col } from "antd";

function UserContainer({ users }: { users: Array<User> }) {
  return (
    <Flex wrap gap="small" justify="center">
      <Row gutter={[16, 16]} justify="start" style={{ width: "70%" }}>
        {users ? (
          users.map((user) => (
            <Col span={4}>
              <UserCard key={user.id} user={user} />
            </Col>
          ))
        ) : (
          <div>loading users...</div>
        )}
      </Row>
    </Flex>
  );
}

export default UserContainer;
