import { Button, Flex, Typography } from "antd";
import styled from "styled-components";
import { themeTokens } from "@repo/ui/contexts";

const { Title } = Typography;

const Container = styled(Flex)`
  background-color: #fff;
  margin-top: 24px;
  padding: 32px 24px 64px;
  border-radius: 5px;
  > * {
    max-width: 588px;
  }
  .ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
    display: none !important;
  }
`;

const FormButtons = styled(Flex)`
  margin-top: 36px;
`;

const ApplyButton = styled(Button)`
  background-color: ${themeTokens.colorPrimaryBgShop};
  min-width: 120px;
`;

const CancelButton = styled(Button)``;

const PageTitle = styled(Title)``;

export default {
  Container,
  PageTitle,
  FormButtons,
  ApplyButton,
  CancelButton,
};
