
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import {
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
  ItemType,
} from "antd/es/breadcrumb/Breadcrumb";
import { useMatches } from "react-router-dom";

import { Link } from "react-router-dom";
import { AnyObject } from "antd/es/_util/type";
import {  productPath } from "@ui/pages";


export const Breadcrumb = () => {
  const routeMatches = useMatches();



  const lastRouteId = routeMatches[routeMatches.length - 1].id;

  const rootItems = [
    {
      path: "",
      title: <HomeOutlined />,
    },
  ];

  const productItems = [
    ...rootItems,
    {
      path: productPath.list(),
      title: "Products",
    },
  ];


  const breadcrumbItemDict: Record<string, ItemType[]> = {
    "product-create": [
      ...productItems,
      {
        title: "Add product",
      },
    ],
  
    "product-sync-history": [
      ...productItems,
      {
        title: "Products/Variant Sync History",
      },
    ],

  


  };

  const itemRender = (
    currentRoute: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>,
    _: AnyObject,
    items: Partial<BreadcrumbItemType & BreadcrumbSeparatorType>[],
    paths: string[],
  ) => {
    const isLast = currentRoute?.path === items[items.length - 1]?.path;

    return isLast ? (
      <span>{currentRoute.title}</span>
    ) : (
      <Link to={`${paths.join("/")}`}>{currentRoute.title}</Link>
    );
  };

  const items = breadcrumbItemDict[lastRouteId];
  return <AntdBreadcrumb itemRender={itemRender} items={items} />;
};
