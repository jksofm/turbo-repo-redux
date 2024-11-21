import { RouteObject } from "react-router-dom";
import { BrandEdit } from "./BrandView";
import BrandList from "./BrandList";

export const brandRoutes: RouteObject[] = [
  {
    id: "brand-list",
    path: "",
    element: <BrandList />,
  },
  {
    id: "brand-create",
    path: "new",
    element: <BrandEdit />,
  },
  {
    id: "vendor-brand-create",
    path: "new/:vendorId",
    element: <BrandEdit />,
  },
  {
    id: "brand-edit",
    path: "edit/:brandId",
    element: <BrandEdit />,
  },
];
