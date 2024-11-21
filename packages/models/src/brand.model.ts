import { PagingRequest } from "./common.model";
import { Vendor } from "./vendor.model";

export interface Brand {
  id: string;
  name: string;
  vendor: Vendor;
  vendorId: string;
  productCount: number;
  defaultColors: string[];
  defaultSizes: string[];
  createdAt: string;
  isSubscribed?: boolean;
  subscribedProductCount?: number;
}

export interface BrandListFilter {
  name?: string;
  vendorId?: string;
  productCount?: number;
  createdAt?: string;
  searchKeyword?: string;
  isSubscribed?: boolean | string;
  shopId?: string;
  viewType?: string;
  subscriptionId?: string;
}

export type BrandPagingRequest = BrandListFilter & PagingRequest;

export interface BrandListForm extends BrandPagingRequest {}

export interface CreateBrandRequest {
  name: string;
  vendorId: string;
  defaultSizes: string[];
  defaultColors: string[];
}

export interface UpdateBrandRequest extends CreateBrandRequest {
  id: string;
}

export interface BrandTableDataType {
  key: string;
  name: string;
  productCount?: number;
  vendorName?: string;
  createdAt: string;
  vendorId?: string;
  colors?: string[];
  sizes?: string[];
  isSubscribed?: boolean;
  vendor?: Vendor;
}
export interface GetBrandDetailRequest {
  brandId: string;
  shopId?: string;
}

export interface UpdateBrandForm extends CreateBrandRequest {}
