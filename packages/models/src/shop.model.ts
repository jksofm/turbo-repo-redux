import { PagingRequest } from "./common.model";

export interface Shop {
  id: string;
  name: string;
  shopifyShopId: string;
  shopifyAccessToken: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  globalMarkupType?: MarkupType;
  globalMarkup?: number;
  email: string;
  phone: string;
  productCount?: number;
  vendorCount?: number;
  brandCount?: number;
  members?: MemberDisplay[];
  memberCount?: number;
  des?: string;
  avatar?: string;
  locations?: ShopLocation[];
}
export interface ShopLocation {
  id: string;
  address1: string;
  address2: string;
  city: string;
  countryCode: string;
  phone: string;
  zip: string;
  vendorId: null | string;
}
export interface MemberDisplay {
  url: string;
  name: string;
}

export interface ShopPagingRequest extends PagingRequest {
  name?: string;
  productCount?: number;
  vendorCount?: number;
  members?: [];
  searchKeyword?: string;
}

export interface ShopListForm extends ShopPagingRequest {}
export interface CreateShopRequest {
  name: string;
  shopifyShopId: string;
  shopifyAccessToken: string;
  url: string;
  phone: string;
  email: string;
}
export interface UpdateShopRequest extends CreateShopRequest {
  id: string;
  avatar?: string;
}
export interface UpdateShopConfig
  extends Omit<UpdateShopRequest, "email" | "phone"> {
  globalMarkupType: MarkupType;
  globalMarkup: number;
}
export interface UpdateShopForm extends UpdateShopRequest {}
export interface CreateShopForm extends CreateShopRequest {}
export interface UpdateShopConfig {
  id: string;
  globalMarkupType: MarkupType;
  globalMarkup: number;
}

export interface ShopMemberPagingRequest extends PagingRequest {
  shopId?: string;
  searchKeyword?: string;
  name?: string;
  email?: string;
}

export type MarkupType = "flat" | "percentage";

export interface AddShopUserForm {
  username: string;
  email: string;
  phone: string;
}
export interface AddUsersShopRequest {
  shopId: string;

  userIds: string[];
}
