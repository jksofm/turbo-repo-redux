import { Outlet } from "react-router-dom";
import { SpinLoading } from "@ui/components";
import { Layout as AntdLayout } from "antd";


const AuthenticatedContainer = () => {
  //Call user's profile & shops to check auth & save data to redux
  // const userQuery = {
  //   getProfile: userService.useGetProfile({ refetchOnMountOrArgChange: true }),
  //   getShops: userService.useGetShops({ refetchOnMountOrArgChange: true }),
  // };

  const isLoading = false

  return (
    <AntdLayout>
      {isLoading ? (
        <SpinLoading />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </AntdLayout>
  );
};

export default AuthenticatedContainer;
