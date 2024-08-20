import { Skeleton, Flex } from "antd";

function LoadingReposContrainer() {
  return (
    <Flex justify="center">
      <div style={{ width: "70%" }}>
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: "100%", height: 500, borderRadius: 10 }}
          block
        />
      </div>
    </Flex>
  );
}

export default LoadingReposContrainer;
