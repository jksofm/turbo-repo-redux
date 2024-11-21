import { Avatar, Tooltip } from "antd";

interface AvatarItem {
  url: string;
  name: string;
}

interface AvatarGroupProps {
  items: AvatarItem[];
}

export const AvatarGroup = ({ items }: AvatarGroupProps) => {
  return (
    <Avatar.Group maxCount={3}>
      {items.map((item, index) => (
        <Tooltip key={`${item.url}_${index}`} title={item.name} placement="top">
          <Avatar gap={0} src={item.url} />
        </Tooltip>
      ))}
    </Avatar.Group>
  );
};
