import { Brand } from "./brand.model";
import { PagingRequest } from "./common.model";
import { Product } from "./product.model";
import { Vendor } from "./vendor.model";

export type SubscriptionType = "vendor" | "brand" | "product";

export interface VendorSubscription {
  id: string;
  vendor: Vendor;
}
export interface BrandSubscription {
  id: string;
  brand: Brand;
}
export interface ProductSubscription {
  id: string;
  product: Product;
}

export interface Subscription {
  id: string;
}

export interface GetSubscriptionPagingRequest extends PagingRequest {
  searchKeyword?: string;
}

export interface GetSubscriptionForm extends GetSubscriptionPagingRequest {}

export interface CreateSubscriptionRequest {
  name: string;
}

export interface UpdateSubscriptionRequest extends CreateSubscriptionRequest {
  id: string;
}

export interface UpdateSubscriptionForm
  extends Omit<UpdateSubscriptionRequest, "id"> {}

export interface AddProductSubscriptionRequest {
  productIds: string[];
}

export interface RemoveProductSubscriptionRequest {
  productIds: string[];
}

export interface AddVendorSubscriptionRequest {
  vendorIds: string[];
}

export interface RemoveVendorSubscriptionRequest {
  vendorIds: string[];
}

export interface AddBrandSubscriptionRequest {
  brandIds: string[];
}

export interface RemoveBrandSubscriptionRequest {
  brandIds: string[];
}

export type SubscriptionListViewType = "vendor" | "brand" | "product";

export interface SubscriptionFilter {
  viewType: SubscriptionListViewType;
  searchKeyword?: string;
  isSubscribed?: boolean;
  shopId?: string;
}
export type SubscriptionListForm = SubscriptionFilter & PagingRequest;
