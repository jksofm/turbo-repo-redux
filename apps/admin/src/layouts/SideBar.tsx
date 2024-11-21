import {
  SideBar as CommonSideBar,
  SideBarMenu,
} from "@repo/ui/layouts/SideBar";

import { productPath } from "@repo/ui/pages/product";


export const SideBar = () => {
  const menuItems = [
    {
      label: "Products",
      url: productPath.list(),
      baseUrl: productPath.basePath(),
      icon: <></>,
    },
  
  ];
  const sideBarComponents = {
    SideBarMenu: <SideBarMenu items={menuItems} />,
  };

  return <CommonSideBar components={sideBarComponents} />;
};
