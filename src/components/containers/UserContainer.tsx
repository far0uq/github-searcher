import { useCallback, useRef } from "react";
import User from "../../interface/userInterface";
import UserCard from "../cards/UserCard";
import { Flex, Row, Col } from "antd";
import { useEffect, useState } from "react";
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

function UserContainer({ users }: { users: Array<User> }) {
  const lastElementRef = useRef(null);
  const query = useSelector((state: RootState) => state.query.query);
  const { fetchMoreUsers } = useInfiniteFetch();
  const [localUsers, setLocalUsers] = useState(users);

  const addUsers = useCallback(async () => {
    const moreUsers = await fetchMoreUsers(query, users);
    if (moreUsers) setLocalUsers(moreUsers);
  }, []);

  useEffect(() => {
    const options = {
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        addUsers();
      }
    }, options);

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
  }, [addUsers, query, setLocalUsers, fetchMoreUsers]);

  return (
    <Flex wrap gap="small" justify="center">
      <Row gutter={[16, 16]} justify="start" style={{ width: "70%" }}>
        {localUsers.map((user, index) =>
          localUsers.length === index + 1 ? (
            <Col ref={lastElementRef} key={user.id}>
              <UserCard user={user} />
            </Col>
          ) : (
            <Col key={user.id}>
              <UserCard user={user} />
            </Col>
          )
        )}
      </Row>
    </Flex>
  );
}

export default UserContainer;
