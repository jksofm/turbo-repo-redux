import { BrandPagingRequest } from "./brand.model";
import { PagingRequest } from "./common.model";

export interface Vendor {
  id: string;
  name: string;
  brandCount: number;
  productCount: number;
  countryCode: string;
  provinceCode: string;
  city: string;
  zip: string;
  address1: string;
  address2?: string;
  phone: string;
  email: string;
  website: string;
  isSubscribed?: boolean;
  shopVendorConfig?: VendorSiteConfig;
}

export interface VendorPagingRequest extends PagingRequest {
  name?: string;
  brandCount?: number;
  productCount?: number;
  email?: string;
  website?: string;
  phoneNumber?: string;
  address?: string;
  searchKeyword?: string;
  isSubscribed?: boolean | string;
  shopId?: string;
  viewType?: string;
  subscriptionId?: string;
}

export interface VendorListForm extends VendorPagingRequest {}

export interface CreateVendorRequest {
  name: string;
  countryCode: string;
  provinceCode: string;
  city: string;
  zip: string;
  address1: string;
  address2?: string;
  phone: string;
  email: string;
  website: string;
}

export interface UpdateVendorRequest extends CreateVendorRequest {
  id: string;
}

export interface VendorEditForm extends CreateVendorRequest {}

export interface VendorTableDataType {
  key: string;
  name: string;
  isSubscribed?: boolean;
  address?: string;
  website?: string;
  email?: string;
  brandCount: number;
  productCount: number;
  phoneNumber?: string;
  shopVendorConfig?: VendorSiteConfig;
}

export interface GetVendorBrandRequest extends BrandPagingRequest {
  vendorId: string;
}
export interface GetVendorBrandForm extends GetVendorBrandRequest {}

export interface GetVendorDetailRequest extends VendorSiteConfig {
  includeRefs?: boolean;
}
export interface UpdateVendorSiteForm extends VendorSiteConfig {
  id: string;
}
export interface CreateVendorSiteConfigRequest extends VendorSiteConfig {}
export interface UpdateVendorSiteRequest extends UpdateVendorSiteForm {}

export interface VendorSiteConfig {
  id?: string;
  vendorId?: string;
  website?: string;
  username?: string;
  vendorName?: string;
  shopId?: string;
  adminUrl?: string;
  vendorKey?: string;
  password?: string;
  account?: string;
  style?: string;
  version?: number;
}
