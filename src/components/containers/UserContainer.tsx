import { useRef } from "react";
import User from "../../interface/userInterface";
import UserCard from "../cards/UserCard";
import { Flex, Row, Col } from "antd";
import { useEffect, useState } from "react";
import useInfiniteFetch from "../../hooks/useInfiniteFetch";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import LoadingUsersContrainer from "../loading/LoadingUsersContrainer";

function UserContainer({ users }: { users: Array<User> }) {
  const lastElementRef = useRef(null);
  const query = useSelector((state: RootState) => state.query.query);
  const { fetchMoreUsers, loading } = useInfiniteFetch();
  const [localUsers, setLocalUsers] = useState(users);

  const addUsers = async () => {
    const moreUsers = await fetchMoreUsers(query, localUsers);
    if (moreUsers) setLocalUsers(moreUsers);
  };

  useEffect(() => {
    const options = {
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        addUsers();
      }
    }, options);

    if (lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [localUsers]);

  return (
    <Flex wrap gap="small" justify="center">
      <Row gutter={[16, 16]} justify="start" style={{ width: "70%" }}>
        {localUsers.map((user, index) =>
          localUsers.length === index + 1 ? (
            <Col ref={lastElementRef} key={user.id} span={4}>
              <UserCard user={user} />
            </Col>
          ) : (
            <Col key={user.id} span={4}>
              <UserCard user={user} />
            </Col>
          )
        )}
        {loading && <LoadingUsersContrainer />}
      </Row>
    </Flex>
  );
}

export default UserContainer;
