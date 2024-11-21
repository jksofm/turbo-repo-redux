import { Button, Flex, Typography } from "antd";
import styled from "styled-components";
import { themeTokens } from "@repo/ui/contexts";

const { Title } = Typography;

const Container = styled(Flex)`
  height: 100%;
`;

const FormWrapper = styled(Flex)`
  background-color: #fff;
  padding: 32px 24px 64px;
  border-radius: 5px;
  flex: 1;
  > * {
    max-width: 588px;
  }
  > form {
    display: flex;
    flex-direction: column;
    min-height: calc(100% - 90px) !important;
  }
  .ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none !important;
  }
`;

const FormItems = styled.div`
  flex: 1;
`;

const ApplyButton = styled(Button)`
  background-color: ${themeTokens.colorPrimaryBgShop};
  min-width: 120px;
`;

const CancelButton = styled(Button)``;

const PageTitle = styled(Title)``;

export default {
  Container,
  FormWrapper,
  PageTitle,
  FormItems,
  ApplyButton,
  CancelButton,
};
