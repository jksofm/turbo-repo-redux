import { Button, Modal } from "antd";
import { ReactNode, useState } from "react";

interface ConfirmModalProps {
  title: string;
  content: ReactNode;
  onOk?: () => void;
  onCancel: () => void;
  danger?: boolean;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  textConfirm?: string;
}

export const ConfirmModal = ({
  title,
  content,
  onOk,
  onCancel,
  danger,
  textConfirm = "Delete",
  type = "primary",
}: ConfirmModalProps) => {
  const [isOkLoading, setOkLoading] = useState(false);

  const handleOk = async () => {
    if (onOk) {
      setOkLoading(true);
      await onOk();
      setOkLoading(false);
    }
  };
  return (
    <Modal
      open={true}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
      footer={(_, { CancelBtn }) => (
        <>
          <CancelBtn />
          <Button
            type={type}
            danger={danger}
            onClick={handleOk}
            loading={isOkLoading}
          >
            {textConfirm}
          </Button>
        </>
      )}
    >
      {content}
    </Modal>
  );
};
