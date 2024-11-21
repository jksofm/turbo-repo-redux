import { RouteObject } from "react-router-dom";
import BrandList from "../brand/BrandList";
import VendorList from "./VendorList";
import { vendorPath as repoVendorPath } from "@repo/ui/pages/vendor";
import { VendorEdit } from "./VendorEdit";
import { VendorSyncHistory } from "./VendorSyncHistory";
import VendorEditSite from "./VendorEditSite";

export const vendorRoutes: RouteObject[] = [
  {
    id: "vendor-list",
    path: "",
    element: <VendorList />,
  },
  {
    id: "vendor-create",
    path: "new",
    element: <VendorEdit />,
  },
  {
    id: "vendor-edit",
    path: "edit/:vendorId",
    element: <VendorEdit />,
  },
  {
    id: "vendor-brands",
    path: ":vendorId/brands",
    element: <BrandList />,
  },
  {
    id: "vendor-sync-history",
    path: "sync-history",
    element: <VendorSyncHistory />,
  },
  {
    id: "vendor-site-config",
    path: ":vendorId/site-config",
    element: <VendorEditSite />,
  },
];

const basePath = "/vendors";

export const vendorPath = {
  ...repoVendorPath,
  detail: (vendorId: string) => `${basePath}/edit/${vendorId}`,
  new: () => `${basePath}/new`,
};
