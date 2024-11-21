import { Flex, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;
const NoDataWrapper = styled(Flex)`
  margin: auto auto;
`;

const NoDataDescription = styled(Text)`
  color: #8c8c8c;
  margin-bottom: 16px;
`;

export default { NoDataWrapper, NoDataDescription };
