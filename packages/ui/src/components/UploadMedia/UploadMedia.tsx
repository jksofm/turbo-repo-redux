import { Form, FormInstance, Image, message, UploadFile } from "antd";
import S from "./UploadMedia.styled";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { commonMessage } from "@repo/constants";
import { RcFile, UploadChangeParam, UploadProps } from "antd/es/upload";

interface UploadMediaProps {
  name: string;

  images: UploadFile[];
  setTouch?: React.Dispatch<React.SetStateAction<boolean>>;
  isDiscard?: boolean;
  form: FormInstance;
  maxFileSize: number;
  paramId: string | undefined;
  uploadAPI: string;
  handleChange: ((info: UploadChangeParam<UploadFile>) => void) | undefined;
  onlyShow?: boolean;
}

export function UploadMedia<T>({
  images,
  setTouch,
  isDiscard,
  form,
  maxFileSize,
  paramId,
  handleChange,
  uploadAPI,
  name,
  onlyShow,
}: UploadMediaProps) {
  const [fileList, setFileList] = useState<UploadFile[]>(images || []);
  const FormItem = Form.Item<T>;
  const normFile = (
    e: Record<string, UploadFile | UploadFile[] | ProgressEvent>,
  ) => {
    if (Array.isArray(e)) {
      return e;
    }

    if (
      !Array.isArray(e?.fileList) ||
      (!e.fileList.every((item) => item.type?.includes("image")) &&
        e.fileList.length === 1 &&
        fileList.length === 0)
    ) {
      return [];
    } else {
      const newFileList = e.fileList.filter(
        (item: UploadFile) =>
          !!item.url || item.type?.includes("image") || item.status === "done",
      );
      return newFileList;
    }
  };
  const onChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "error") {
      message.error(`${info.file.name}
                           file upload failed.`);
    }
    if (info.file.status === "done") {
      const newFileList = info.fileList.filter(
        (item: UploadFile) =>
          item.url || (item.type && item.type.includes("image")),
      );

      if (newFileList?.length) {
        setFileList(newFileList);
        setTouch?.(true);
      }
    }
    handleChange && handleChange(info);
  };

  const removeFile = ({
    remove,
  }: {
    download: () => void;
    preview: () => void;
    remove: () => void;
  }) => {
    remove();
  };
  const handleBeforeUpload = (file: RcFile) => {
    if (!file.type?.includes("image")) {
      message.error(commonMessage.uploadOnlyImage);

      return false;
    }
    if (file.size > maxFileSize) {
      message.error(commonMessage.uploadMaximumImageSize);
      return false;
    }

    return true;
  };
  const handleRemoveFile = (file: UploadFile) => {
    setFileList((prev) => prev.filter((item) => item.url !== file.url));
  };

  useEffect(() => {
    if (!paramId) {
      setFileList([]);
      form?.setFieldValue("images", []);
    }
  }, [isDiscard]);

  return (
    <Image.PreviewGroup>
      <FormItem
        label="Product images"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        name={name as any}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <S.UploadMedia
          action={uploadAPI}
          beforeUpload={(file) => handleBeforeUpload(file)}
          withCredentials={true}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          accept="image/*"
          onRemove={(file) => handleRemoveFile(file)}
          itemRender={(originNode, file, _, actions) => {
            const src = file.url || file.thumbUrl;
            if (
              file.status === "error" ||
              (file.response && !file.type?.includes("image")) ||
              (file.size && file.size > maxFileSize)
            ) {
              message.error(commonMessage.uploadImageFail);
              return null;
            }

            return (
              <S.UploadMediaWrapper>
                {file.status === "uploading" ? (
                  <>
                    <S.ButtonDeleteImageWrapper
                      onClick={() => removeFile(actions)}
                    >
                      <DeleteOutlined />
                    </S.ButtonDeleteImageWrapper>
                    <Image src={src}>{originNode}</Image>
                    <S.UploadMediaPercentage>
                      {file.percent && Math.round(file.percent)}%
                    </S.UploadMediaPercentage>
                    <S.UploadMediaProgress
                      percent={file.percent && Math.round(file.percent)}
                    >
                      {originNode}
                    </S.UploadMediaProgress>
                  </>
                ) : (
                  <S.ImageWrapper>
                    <Image src={src}>{originNode}</Image>
                    {!onlyShow && (
                      <S.ButtonDeleteImageWrapper
                        onClick={() => {
                          actions.remove();
                          setTouch?.(true);
                        }}
                      >
                        <DeleteOutlined />
                      </S.ButtonDeleteImageWrapper>
                    )}
                  </S.ImageWrapper>
                )}
              </S.UploadMediaWrapper>
            );
          }}
        >
          {!onlyShow && (
            <>
              {fileList?.length ||
              images?.length ||
              form?.getFieldValue("images")?.length ? (
                <S.UploadTextWrapper>
                  <PlusOutlined />
                  <S.UploadText>Upload</S.UploadText>
                </S.UploadTextWrapper>
              ) : (
                <div>
                  <S.UploadMediaButtonIcon />
                  <div>Click or drag file to this area to upload</div>
                  <S.UploadMediaLimitText>
                    Max . file size :300MB
                  </S.UploadMediaLimitText>
                </div>
              )}
            </>
          )}
        </S.UploadMedia>
      </FormItem>
    </Image.PreviewGroup>
  );
}
