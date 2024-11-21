import { CameraOutlined } from "@ant-design/icons";
import { Progress, Typography, Upload } from "antd";
import styled from "styled-components";
import { themeTokens } from "@ui/contexts";

const { Text } = Typography;
const UploadMedia = styled(Upload)`
  .ant-upload-select {
    width: ${(props) => {
      const newFileList = props.fileList?.filter(
        (item) => !item.status || item.status === "done",
      );
      return newFileList?.length ? "133px" : "100%";
    }} !important;
    height: 133px !important;
  }
  .ant-image-img {
    width: 133px !important;
    height: 133px !important;
  }
`;

const UploadMediaWrapper = styled.div`
  position: relative;
  img {
    border-radius: 16px !important;
  }
`;
const UploadMediaProgress = styled(Progress)`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const UploadMediaButtonIcon = styled(CameraOutlined)`
  font-size: 20px;
  color: ${themeTokens.colorPrimaryBg};
`;

const UploadMediaLimitText = styled.div`
  font-size: 14px;
  color: #00000073;
`;
const UploadVariantMedia = styled(Upload)`
  .ant-upload-select {
    width: 50px !important;
    height: 50px !important;
  }
`;
const ButtonDeleteImageWrapper = styled.div`
  margin-top: 8px;
  background-color: transparent;
  position: absolute;
  top: 0%;
  right: 5%;
  z-index: 99;
  cursor: pointer;
  svg {
    color: red;
    font-size: 18px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  background-color: #eee;
  border-radius: 8px;
  img {
    object-fit: contain !important;
  }
`;
const UploadTextWrapper = styled.div``;

const UploadText = styled(Text)`
  color: #2a2974 !important;
  display: block !important;
  font-weight: 500;
`;
const UploadMediaPercentage = styled(Typography.Text)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 100%;
  background: #00000073;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export default {
  UploadMedia,
  UploadMediaWrapper,
  UploadMediaLimitText,
  UploadMediaButtonIcon,
  UploadMediaProgress,
  UploadVariantMedia,
  ButtonDeleteImageWrapper,
  ImageWrapper,
  UploadTextWrapper,
  UploadText,
  UploadMediaPercentage,
};
