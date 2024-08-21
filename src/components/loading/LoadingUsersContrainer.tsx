import { Skeleton, Flex, Row, Col } from "antd";

function LoadingUsersContrainer({rowGap}: {rowGap:string}) {
  return (
    <Flex wrap gap="small" justify="center">
      <Row gutter={[16, 16]} justify="space-around" style={{ width: rowGap}}>
        <Col span={4}>
          <Skeleton.Button
            active={true}
            size="large"
            style={{ width: "11vw", height: 300, borderRadius: 10 }}
          />
        </Col>
        <Col span={4}>
          <Skeleton.Button
            active={true}
            size="large"
            style={{ width: "11vw", height: 300, borderRadius: 10 }}
          />
        </Col>
        <Col span={4}>
          <Skeleton.Button
            active={true}
            size="large"
            style={{ width: "11vw", height: 300, borderRadius: 10 }}
          />
        </Col>
        <Col span={4}>
          <Skeleton.Button
            active={true}
            size="large"
            style={{ width: "11vw", height: 300, borderRadius: 10 }}
          />
        </Col>
        <Col span={4}>
          <Skeleton.Button
            active={true}
            size="large"
            style={{ width: "11vw", height: 300, borderRadius: 10 }}
          />
        </Col>
        <Col span={4}>
          <Skeleton.Button
            active={true}
            size="large"
            style={{ width: "11vw", height: 300, borderRadius: 10 }}
          />
        </Col>
      </Row>
    </Flex>
  );
}

export default LoadingUsersContrainer;
