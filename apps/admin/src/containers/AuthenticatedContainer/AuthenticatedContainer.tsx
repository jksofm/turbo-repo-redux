import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { SideBar } from "@/layouts/SideBar";

const AuthenticatedContainer = () => {
  return (
    <Layout>
      <Layout.Sider width={262}>
        <SideBar />
      </Layout.Sider>
      <Layout>
    
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AuthenticatedContainer;
