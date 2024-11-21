import { brandPath as rootBrandPath } from "@repo/ui/pages/brand";

const basePath = "/brands";
export const brandPath = {
  ...rootBrandPath,
  detail: (brandId: string) => `${basePath}/edit/${brandId}`,
  new: (vendorId?: string) =>
    `${basePath}/new${vendorId ? `/${vendorId}` : ""}`,
};
