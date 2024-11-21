import { PagingRequest } from "./common.model";
import { Product } from "./product.model";

export enum SyncHistoryLogType {
  SHOP_SYNC = "shopify_sync",
  VENDOR_SYNC = "vendor_sync",
}
export interface SyncHistoryPagingRequest extends PagingRequest {
  createdAt?: string;
  shopId?: string;
  vendorId?: string;
  isProductSync?: boolean;
  viewType?: string;
  productName?: string;
  name?: string;
  vendorName?: string;
  brandName?: string;
  type?: SyncHistoryLogType.SHOP_SYNC | SyncHistoryLogType.VENDOR_SYNC | string;
}

export interface SyncHistoryListForm extends SyncHistoryPagingRequest {
  createdAt?: string;
  shopId?: string;
  vendorId?: string;
  brandId?: string;
  action?: string;
  type?: SyncHistoryLogType.SHOP_SYNC | SyncHistoryLogType.VENDOR_SYNC | string;
  name?: string;
}

export interface SyncHistory {
  id: string;
  key?: string;
  user?: {
    avatar: string;
    name: string;
  };
  createdAt: string;
  synced?: number;
  updated?: number;
  added?: number;
  removed?: number;
  action?: string;
  productId?: string;
  description?: string;
  changes?: string;
  colors?: string[];
  sizes?: string[];
  type?: SyncHistoryLogType.SHOP_SYNC | SyncHistoryLogType.VENDOR_SYNC | string;
  product?: Product;
}

export interface SyncHistoryTableDataType {
  key: string;

  createdAt: string;
  syncedCount?: number;
  updatedCount?: number;
  addedCount?: number;
  removedCount?: number;
  product?: Product;
  sizes?: string[];
  colors?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changes?: any;
  type?: SyncHistoryLogType.SHOP_SYNC | SyncHistoryLogType.VENDOR_SYNC | string;
  action?: string;
  description?: string;
  productId?: string;
  user?: {
    avatar: string;
    name: string;
  };
}
