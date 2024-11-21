import { Avatar, Flex, Typography } from "antd";

function UserDisplay({ user }: { user: { name: string; avatar: string } }) {
  const { Text } = Typography;
  return (
    <Flex align="center" gap="middle">
      {user?.avatar && <Avatar size={"large"} src={user.avatar} />}

      <Text>{user?.name}</Text>
    </Flex>
  );
}

export default UserDisplay;
