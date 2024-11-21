import { Flex } from "antd";
import styled from "styled-components";

const Container = styled(Flex)<{ $isTitle?: boolean }>`
  flex-direction: column;
  width: 100%;
  min-height: ${(props) =>
    props.$isTitle ? "calc(100% - 90px)" : "calc(100% - 24px)"};

  border-radius: 5px;
  padding: 16px 0px;

  background-color: white;

  .ant-skeleton.ant-skeleton-element {
    width: 100% !important;
    height: 100% !important;
  }
  .ant-skeleton-input {
    height: 100% !important;
    padding: 8px 0 !important;
    width: 100% !important;
    display: block !important;
    min-width: 20px !important;
  }
`;

const RowWrapper = styled(Flex)`
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;
const WrapperInput = styled.div<{ $isWidth?: string; $isHeight?: string }>`
  width: ${(props) => (props.$isWidth ? props.$isWidth : "100px")}!important;
  height: ${(props) => (props.$isHeight ? props.$isHeight : "25px")}!important;
`;

const LastInput = styled.div`
  flex: 1 !important;
`;

export default { Container, WrapperInput, RowWrapper, LastInput };
