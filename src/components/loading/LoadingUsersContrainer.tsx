import { Skeleton, Flex } from "antd";

function LoadingUsersContrainer() {
  return (
    <Flex justify="center">
      <Flex justify="space-between" style={{ width: "85%" }}>
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: 250, height: 300, borderRadius: 10 }}
        />
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: 250, height: 300, borderRadius: 10 }}
        />
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: 250, height: 300, borderRadius: 10 }}
        />
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: 250, height: 300, borderRadius: 10 }}
        />
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: 250, height: 300, borderRadius: 10 }}
        />
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: 250, height: 300, borderRadius: 10 }}
        />
      </Flex>
    </Flex>
  );
}

export default LoadingUsersContrainer;
