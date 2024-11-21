import { Flex, Tag, Typography } from "antd";
import styled from "styled-components";
import { DownOutlined, MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Text } = Typography;

const ShortTextWrapper = styled(Text)<{ $sizeColor?: boolean }>`
  overflow-wrap: break-word !important;
  max-width: 120px !important;
  display: block !important;
  color: ${(props) => (props.$sizeColor ? "#2a2974" : "black")}!important;
`;

const ProgressTag = styled(Tag)`
  background-color: #fff7e6 !important;
  color: #fa8c16 !important;
  border-color: #ffd591 !important;
  font-size: 14px !important;
`;

const CloseTag = styled(Tag)`
  background-color: #fff1f0 !important;
  color: red !important;
  border-color: #ffa39e !important;
  font-size: 14px !important;
`;
const DefaultTag = styled(Tag)`
  background-color: #e6f4ff !important;
  color: #1677ff !important;
  border: 1px solid #92c9fe;
  padding: 3px 6px !important;
  font-size: 14px !important;
  margin-right: 5px !important;
`;
const MinusTag = styled(Tag)<{ $isVisible?: boolean }>`
  padding: 3px 6px !important;
  font-size: 14px !important;
  border: 1px solid #ddd;
  margin: 0;
  height: 28px;
  cursor: pointer;
  margin-left: 2px;
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  background-color: #f5f5f5 !important;
`;
const ActionIcon = styled(MoreOutlined)`
  font-size: 28px;
  cursor: pointer;
`;
const IdWrapper = styled(Link)`
  color: black !important;
`;
const UpdatedText = styled(Text)`
  color: #454a54 !important;
  font-size: 12px;
  display: block;
  margin-top: 6px;
`;
const ItemDetailTitle = styled(Typography.Title)`
  margin: 0 !important;
`;
const DownIconWrapper = styled(DownOutlined)`
  margin-left: 8px;
  font-size: 10px;
`;
const Wrapper = styled(Flex)<{ $maxWidth?: number }>`
  align-items: center !important;
  width: 100%;
  overflow: hidden;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : "200px")};
`;
const Container = styled.div`
  display: inline-flex;
`;
const SizeText = styled.p`
  color: black !important;
  margin: 0 !important;
`;

export default {
  Container,
  ProgressTag,
  SizeText,
  DownIconWrapper,
  Wrapper,
  DefaultTag,
  UpdatedText,
  IdWrapper,
  ItemDetailTitle,
  MinusTag,
  ActionIcon,
  CloseTag,
  ShortTextWrapper,
};
