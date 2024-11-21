import { Flex, Spin } from "antd";
import styled from "styled-components";

const SpinWrapper = styled(Spin)`
  margin: auto auto;
`;
const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default { SpinWrapper, Container };
