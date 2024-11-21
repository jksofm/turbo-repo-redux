import ShopList from "./ShopList";
import { AddUser, ShopCreate, ShopEdit, ShopView } from "@repo/ui/pages/shop";
import {
  ShopMemberDetail,
  ShopSubscriptionDetail,
} from "@repo/ui/pages/shop/ShopView";
import { ProductSyncHistory } from "@ui/pages";
import { RouteObject } from "react-router-dom";

export const shopRoutes: RouteObject[] = [
  {
    id: "shop-list",
    path: "",
    element: <ShopList />,
  },
  {
    id: "shop-create",
    path: "new",
    element: <ShopCreate />,
  },
  {
    id: "shop-edit",
    path: ":shopId/edit",
    element: <ShopEdit />,
  },
  {
    id: "shop-view",
    path: ":shopId",
    element: <ShopView />,
  },
  {
    id: "shop-add-user",
    path: ":shopId/add-user",
    element: <AddUser />,
  },
  {
    id: "shop-sync-history",
    path: ":shopId/sync-history",
    element: <ProductSyncHistory />,
  },
  {
    id: "shop-member-detail",
    path: ":shopId/member",
    element: <ShopMemberDetail />,
  },
  {
    id: "shop-subscription-detail",
    path: ":shopId/subscription",
    element: <ShopSubscriptionDetail />,
  },
];

export default shopRoutes;
