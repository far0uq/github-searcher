import { Skeleton, Flex } from "antd";

function LoadingReposContrainer({containerWidth}: {containerWidth: string}) {
  return (
    <Flex justify="center">
      <div style={{ width: containerWidth }}>
        <Skeleton.Button
          active={true}
          size="large"
          style={{ width: "100%", height: 400, borderRadius: 10 }}
          block
        />
      </div>
    </Flex>
  );
}

export default LoadingReposContrainer;
