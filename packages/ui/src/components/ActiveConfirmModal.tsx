import { Button, Modal } from "antd";
import { ReactNode, useState } from "react";

interface ActiveConfirmModalProps {
  title: string;
  content: ReactNode;
  onOk: () => void;
  onCancel: () => void;
}

export const ActiveConfirmModal = ({
  title,
  content,
  onOk,
  onCancel,
}: ActiveConfirmModalProps) => {
  const [isOkLoading, setOkLoading] = useState(false);

  const handleOk = async () => {
    setOkLoading(true);
    await onOk();
    setOkLoading(false);
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
            type="primary"
            danger
            onClick={handleOk}
            loading={isOkLoading}
          >
            Agree
          </Button>
        </>
      )}
    >
      {content}
    </Modal>
  );
};
