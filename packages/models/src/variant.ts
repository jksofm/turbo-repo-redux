import { StockData } from "./product.model";

export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  available: string;
  color: string;
  sku: string;
  externalId: string;
  orderable: string;
  vendorPrice: number;
  price: number;
  productId: string;
  shortDescription: string;
  size: string;
  createdAt: string;
  updatedAt: string;
  mediaUrls: string[];
  inventories: StockData[];
}

export interface CreateVariantRequest {
  mediaUrls: string[];
  color: string;
  size: string;
  price: number;
  vendorPrice: number;
  shopStock?: StockData[];
  vendorStock?: StockData[];
  inventories?: StockData[];
}

export interface UpdateVariantRequest
  extends Omit<CreateVariantRequest, "color" | "size"> {
  price: number;
  id: string;
}

export interface VariantTableItem extends CreateVariantRequest {
  id: string;
  name: string;
}
