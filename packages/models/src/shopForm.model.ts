import { PagingRequest } from "./common.model";

export interface FormListItem {
  id: string;
  name?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  submissionCount?: number;
}

export interface GetFormDetailRequest {
  formId: string;
  shopId?: string;
}

export interface ShopFormFilter {
  searchKeyword?: string;
}
export type ShopFormPagingRequest = ShopFormFilter & PagingRequest;

export interface ShopFormListForm extends ShopFormPagingRequest {}

export interface CreateFormRequest {
  name: string;
  description: string;
}
