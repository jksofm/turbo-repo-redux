import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const TextDayWrapper = styled(Text)`
  font-weight: 600 !important;
  display: block !important;
`;

const TextTimeWrapper = styled(Text)`
  display: block !important;
`;
const TableWrapper = styled.div`
  tbody > tr:nth-child(odd) {
    background-color: #f5f5f5;
  }
`;
const TableShopWrapper = styled.div`
  tbody > tr:nth-child(odd) {
    background-color: #f5f5f5;
  }
  .ant-table-placeholder {
    svg {
      path:nth-child(1),
      path:nth-child(3),
      path:nth-child(4),
      path:nth-child(10) {
        fill: #f0f0f0 !important;
      }
      path:nth-child(3),
      path:nth-child(5),
      path:nth-child(6),
      path:nth-child(7),
      path:nth-child(8),
      path:nth-child(9),
      path:nth-child(11),
      path:nth-child(12),
      path:nth-child(13) {
        stroke: black !important;
      }
    }
  }
`;

export default {
  TextDayWrapper,
  TextTimeWrapper,
  TableWrapper,
  TableShopWrapper,
};
