import { ConfigTypeMap } from "dayjs";
import { Brand } from "./brand.model";
import { PagingRequest } from "./common.model";
import { Shop } from "./shop.model";
import { Vendor } from "./vendor.model";

export enum StatusOrder {
  CLOSED = "closed",
  INPROGRESS = "inprogress",
  COMPLETED = "completed",
}
export type StatusOrderType =
  | StatusOrder.CLOSED
  | StatusOrder.INPROGRESS
  | StatusOrder.COMPLETED;
export interface OrderVendor {
  id: string;
  vendorName?: string;
  colors: string[];
  sizes: string[];
  vendorId?: string;
  quantity?: number;
  orderNumber?: number | string;
  createdAt?: string;
  updatedAt?: string;
  status: StatusOrderType;
  orderDate?: string;
  name: string;
  shipDate?: string;
  poNumber?: number | string;
  orderRemarks?: string;
  shopId?: string;
  brandId?: string;
  itemCount?: number;
  totalCost?: number | string;
  completionDate?: string;
  notes?: string;
  orderItems?: OrderItem[];
  vendor?: Vendor;
  brand?: Brand;
  shop?: Shop;
  orderNo?: number;
}
export interface OrderItem {
  id?: string;
  key?: string;
  orderId?: string;
  style?: string;
  color?: string;

  size?: string;
  price?: number;
  quantity?: number;
  total?: number;
  isEditting?: boolean;
  isShowButton?: boolean;
}

export interface OrderVendorListFilter {
  name?: string;
  size?: string[];
  colors?: string[];
  status?: StatusOrderType;
  vendorId?: string;
  searchKeyword?: string;
  shopId?: string;
  orderId?: string;
}
export type OrderVendorPagingRequest = OrderVendorListFilter & PagingRequest;
export interface OrderVendorListForm extends OrderVendorPagingRequest {}

export interface CreateVendorOrderRequest {
  vendorId?: string;
  brandId?: string;
  orderDate?: string | ConfigTypeMap[keyof ConfigTypeMap];
  colors?: string[];
  style?: string;
  quantity?: number;
  sizes?: string[];
  itemCount?: number;
  shopId?: string;
  status?: StatusOrderType;
  notes?: string;
  poNumber?: string;
  orderItems?: OrderItem[];
  shipDate?: string | ConfigTypeMap[keyof ConfigTypeMap];
  completionDate?: string | ConfigTypeMap[keyof ConfigTypeMap];
  formOrderItems?: OrderItem[];
}
export interface UpdateVendorOrderRequest extends CreateVendorOrderRequest {
  id: string;
}

export interface UpdateVendorOrderForm extends UpdateVendorOrderRequest {}
export interface CreateVendorOrderForm extends CreateVendorOrderRequest {}
export interface OrderTableDataType {
  key: string;
  name?: string;
  vendorName?: string;
  quantity?: number;
  createdAt?: string;
  colors?: string[];
  sizes?: string[];
  orderNumber?: number | string;
  vendorId?: string;
  orderDate?: string;
  poNumber?: number | string;
  color?: string;
  size?: string;
  vendor?: Vendor;
  brand?: Brand;
  updated?: string;
  totalCost?: number | string;
  shopName?: string;
  style?: string;
  action?: string;
  orderNo?: number;
}
export interface GetOrderDetailRequest {
  orderId: string;
  shopId?: string;
  status?: StatusOrderType;
}
export interface DeleteOrderItemRequest {
  orderId: string;
  itemId: string;
}
