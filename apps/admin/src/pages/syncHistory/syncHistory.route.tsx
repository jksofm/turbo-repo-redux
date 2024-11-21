import { ProductSyncHistory } from "@ui/pages";
import { RouteObject } from "react-router-dom";

export const syncHistoryRoutes: RouteObject[] = [
  {
    id: "product-sync-history",
    path: "",
    element: <ProductSyncHistory />,
  },
];
