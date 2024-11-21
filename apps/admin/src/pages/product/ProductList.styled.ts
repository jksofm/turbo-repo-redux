import { CodeSandboxOutlined } from "@ant-design/icons";
import { themeTokens } from "@ui/contexts";
import { Button } from "antd";
import styled from "styled-components";

const ButtonSyncHistory = styled(Button)`
  border-color: #dfdfff;
  min-width: 160px;
  color: #8f949c;
  &:hover {
    svg {
      color: #ddd;
    }
  }
`;
const SyncIcon = styled(CodeSandboxOutlined)`
  color: ${themeTokens.colorPrimary};
`;

export default {
  ButtonSyncHistory,
  SyncIcon,
};
