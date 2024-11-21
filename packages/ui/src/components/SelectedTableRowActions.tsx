import { Button, Checkbox, Flex } from "antd";
import { forwardRef, ReactNode, useImperativeHandle } from "react";

export interface SelectedTableRowActionsHandles {
  onSelectChange: (newSelectedRowKeys: React.Key[]) => void;
}

interface SelectedTableRowActionsProps {
  rowKeys: string[];
  selectedRowKeys: string[];
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<string[]>>;
  renderButtons: () => ReactNode;
}

export const SelectedTableRowActions = forwardRef<
  SelectedTableRowActionsHandles,
  SelectedTableRowActionsProps
>(({ rowKeys, selectedRowKeys, setSelectedRowKeys, renderButtons }, ref) => {
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys.map((key) => String(key)));
  };

  useImperativeHandle(ref, () => ({
    onSelectChange,
  }));

  const onRemoveAll = () => {
    setSelectedRowKeys([]);
  };

  const onSelectAll = () => {
    setSelectedRowKeys(rowKeys);
  };

  if (!selectedRowKeys.length) {
    return <></>;
  }

  return (
    <Flex align="center" gap={12}>
      <Flex gap={8}>
        <Checkbox checked onClick={onRemoveAll} />
        <span>{selectedRowKeys.length} Selected</span>
      </Flex>
      <Button type="text" onClick={onSelectAll}>
        Select all
      </Button>
      {renderButtons()}
    </Flex>
  );
});
