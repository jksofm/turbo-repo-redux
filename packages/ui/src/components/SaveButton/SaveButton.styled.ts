import { Button } from "antd";
import styled from "styled-components";
import { themeTokens } from "@ui/contexts";

const SaveButton = styled(Button)<{ $isAdmin?: boolean }>`
  background-color: ${(props) =>
    props.$isAdmin
      ? themeTokens.colorPrimaryBgAdmin
      : themeTokens.colorPrimaryBgShop};
  min-width: 120px;
  color: white;
`;

export default {
  SaveButton,
};
