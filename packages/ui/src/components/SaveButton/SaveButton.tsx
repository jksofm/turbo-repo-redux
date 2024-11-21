import { Button } from "antd";

interface SaveButtonProps {
  text?: string;
  onClick?: () => void;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
  disabled?: boolean;
}
function SaveButton({
  text,
  onClick,
  type,
  loading,
  htmlType,
  disabled,
}: SaveButtonProps) {
  return (
    <Button
      htmlType={htmlType}
      type={type || "default"}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
    >
      {text}
    </Button>
  );
}

export default SaveButton;
