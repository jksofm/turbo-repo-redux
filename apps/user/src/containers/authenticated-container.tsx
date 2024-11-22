import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";
import { Header, Sidebar } from "@/layouts";


export const AuthenticatedContainer = () => {


  const isLoading = false

  return (
    <AntdLayout className="w-full bg-black">
      {isLoading ? (
        // <SpinLoading />
        <>Loading...</>
      ) : (
        <>
        <AntdLayout.Sider className="h-full overflow-y-scroll" width={300} >
          <Sidebar />
        </AntdLayout.Sider>
        <AntdLayout className="box-border flex-1 bg-black">
        <AntdLayout.Header className="p-0 !h-auto">
            <Header />
        </AntdLayout.Header>
        <AntdLayout.Content className="h-[100vh] overflow-y-scroll">
        <Outlet />

        </AntdLayout.Content>
        </AntdLayout>
      
        </>
      )}
    </AntdLayout>
  );
};

