import { Brand } from "./brand.model";
import { PagingRequest } from "./common.model";
import { ProductMedia } from "./media";
import {
  CreateVariantRequest,
  ProductVariant,
  UpdateVariantRequest,
} from "./variant";
import { Vendor, VendorSiteConfig } from "./vendor.model";
import { allowPurchase, productType } from "@repo/constants";

export interface ProductPagingRequest extends PagingRequest {
  name?: string;
  vendorId?: string;
  brandId?: string;
  vendorIds?: string[];
  brandIds?: string[];
  hasAttribute?: boolean | string;
  searchKeyword?: string;
  colors?: string | string[];
  sizes?: string | string[];
  isSubscribed?: boolean;
  shopId?: string;
  vendorName?: string;
  brandName?: string;
  type?: string;
  viewType?: string;
  subscriptionId?: string;
  isUnsubscribed?: boolean | string;
  minPrice?: number | string;
  maxPrice?: number | string;
  sliderPrice?: number[];
  attributeIds?: string[];
  media?: string;
  minMediaCount?: number;
  maxMediaCount?: number;
}

export interface Product {
  id: string;
  name: string;
  sku?: string;
  price: number;
  vendorPrice: number;
  sizes: string[];
  colors: string[];
  style: string;
  originUrl: string;
  sizeChartUrl: string;
  brand: Brand;
  vendor: Vendor;
  media?: string;
  medias: ProductMedia[];
  description: string;
  shortDescription: string;
  variants: ProductVariant[];
  createdAt: string;
  keywords?: string;
  productAttribute: ProductAttribute[];
  scope: ProductScope.SHOP | ProductScope.SYSTEM;
  stockData: StockData | StockData[];
  isSubscribed?: boolean;
  type?: string;
  variantMedias: VariantMedia[];
  shopId?: string;
  forSale?: boolean;
  shopVendorConfig?: VendorSiteConfig;
}

export interface VariantMedia {
  url?: string;
  id: string;
  variantId: string;
  response?: {
    url: string;
  };
  variantOverrideId?: null | string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  price?: number | null;
  vendorPrice?: number | null;
  brandId: string;
  vendorId: string;
  images: ProductImage[];
  attributeIds: string[];
  colors: string[];
  sizes: ProductSize[];
  style: string;
  variants: CreateVariantRequest[] | UpdateVariantRequest[];
  sku?: string;
  shopId?: string;
  inventories?: StockData[];
  type?: string;
  forSale?: boolean;
}
export interface UpdateProductRequest extends CreateProductRequest {
  id: string;
}

export interface Attribute {
  id: string;
  name: string;
  type: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductAttribute {
  attribute: Attribute;
  attributeId: string;
  productId: string;
}

export interface ProductImage {
  url?: string;
  color?: string;
  variantId?: null | string;
  response?: {
    url: string;
  };
  variantOverrideId?: null | string;
}

export interface ProductSize {
  size: string;
  extendedPrice: string;
}

export interface UpdateProductForm
  extends Omit<UpdateProductRequest, "id" | "sizes"> {
  sizes: string[];
}

export interface ProductListForm
  extends Omit<
    ProductPagingRequest,
    "colors" | "sizes" | "vendorName" | "brandName" | "hasAttribute"
  > {
  sizes?: string[];
  colors?: string[];
  vendorId?: string;
  brandId?: string;
  media?: string;
  hasAttribute?: string | boolean;
  isUnsubscribed?: string;
  forSale?: string | boolean;
  type?: string;
}

export interface ProductListFilter {
  sizes?: string[];
  colors?: string[];
  vendorId?: string;
  brandId?: string;
  hasAttribute?: boolean;
  name?: string;
  shopId?: string;
  vendorIds?: string[];
  brandIds?: string[];
  minPrice?: number;
  maxPrice?: number;
  type?: string;
  forSale?: string | boolean;
  attributeIds?: string[];
  media?: string;
  minMediaCount?: number;
  maxMediaCount?: number;
}

export interface CreateProductForm
  extends Omit<CreateProductRequest, "variants" | "sizes" | "inventories"> {
  sizes: string[];
  variants: CreateVariantRequest[];
  inventories: StockDataForm[];
}
export interface StockLocation {
  address1?: string | null;
  address2?: string | null;
  id: string;
  city?: string;
  countryCode?: string;
  phone?: string;
  vendorId?: string;
  provinceCode?: string;
}
export interface StockData {
  available?: number;
  productId?: string;
  qoh?: number;
  reserved?: number;
  wip?: number;
  location?: StockLocation;
  isVendorInventory?: boolean;
}

export interface StockDataForm {
  available?: number;
  locationId?: string;
  isVendorInventory?: boolean;
  qoh?: number;
}

export interface ProductTableDataType {
  key: string;
  media?: string;
  name?: string;
  vendor?: Vendor;
  brand?: Brand;
  vendorPrice?: number;
  price?: number;
  colors: string[];
  scope?: ProductScope.SHOP | ProductScope.SYSTEM;
  style?: string;
  sizes: string[];
  type?: string;
  forSale?: boolean;
  stockData?: StockData[] | StockData;
  isSubscribed?: boolean;
  variantMedias?: string | VariantMedia[];
  productShopId?: string;
}
export interface GetStockLocationRequest extends PagingRequest {
  vendorId?: string;
}
export interface GetProductDetailRequest {
  shopId?: string;
  productId: string;
}

export interface StockLocationForm extends GetStockLocationRequest {}
enum ProductScope {
  SYSTEM = "system",
  SHOP = "shop",
}
export interface BulkUpdateValues {
  type?: string;
  forSale?: boolean;
  brandId?: string;
}
export interface BulkUpdateProductRequest
  extends ProductPagingRequest,
    BulkUpdateValues {
  productIds?: string[];
}

export type ViewTypeSyncHistory = "product" | "variant";

export interface BulkUpdateProductForm {
  allowPurchase?: (typeof allowPurchase)[keyof typeof allowPurchase];
  productType?: keyof typeof productType | "noChange";
  brandId?: string;
}
