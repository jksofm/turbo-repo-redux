import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";


const AuthenticatedContainer = () => {


  const isLoading = false

  return (
    <AntdLayout>
      {isLoading ? (
        // <SpinLoading />
        <>Loading...</>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </AntdLayout>
  );
};

export default AuthenticatedContainer;
