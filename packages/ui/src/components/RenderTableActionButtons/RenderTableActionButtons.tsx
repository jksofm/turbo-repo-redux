import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { ConfirmModal } from "../ConfirmModal";
import { useNavigate } from "react-router-dom";

interface Actions {
  onDelete?: () => void;
  onEdit?: () => void;
  onView?: () => void;
}
interface Components {
  ButtonDelete?: React.ReactNode;
  ButtonEdit?: React.ReactNode;
  ButtonView?: React.ReactNode;
}
interface RenderTableActionButtonsProps {
  actions: Actions;
  Components?: Components;
  ExtraActions?: React.ReactNode;
  viewPath?: string;
  disabledDelete?: boolean;
  disabledEdit?: boolean;
  disabledView?: boolean;
  isLoading?: boolean;
  titleDelete: string;
  contentDelete: string;
  editPath?: string;
}
function RenderTableActionButtons({
  actions,
  Components,
  ExtraActions,
  isLoading,
  disabledDelete,
  disabledEdit,
  disabledView,
  titleDelete = "Delete item",
  contentDelete = "Are you sure you want to delete this item?",
  viewPath,
  editPath,
}: RenderTableActionButtonsProps) {
  const navigate = useNavigate();
  const [isDeleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const onOpen = () => {
    setDeleteConfirmVisible(true);
  };
  const onCancel = () => {
    setDeleteConfirmVisible(false);
  };
  return (
    <>
      {Components?.ButtonView ?? (
        <>
          <Button
            type="text"
            disabled={disabledView}
            icon={<EyeOutlined />}
            onClick={
              actions?.onView ??
              (() => {
                navigate(viewPath as string);
              })
            }
          />
        </>
      )}
      {Components?.ButtonEdit ?? (
        <Button
          disabled={disabledEdit}
          type="text"
          icon={<EditOutlined />}
          onClick={
            actions?.onEdit ??
            (() => {
              navigate(editPath as string);
            })
          }
        />
      )}
      {Components?.ButtonDelete ?? (
        <Button
          type="text"
          icon={<DeleteOutlined type="danger" />}
          onClick={onOpen}
          loading={isLoading}
          disabled={disabledDelete}
        />
      )}
      {ExtraActions}
      {isDeleteConfirmVisible && (
        <ConfirmModal
          danger
          title={titleDelete}
          content={contentDelete}
          onOk={actions?.onDelete}
          onCancel={onCancel}
        />
      )}
    </>
  );
}

export default RenderTableActionButtons;
