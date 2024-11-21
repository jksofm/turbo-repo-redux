import {
  CreateProductRequest,
  GetProductDetailRequest,
  Product,
  ProductPagingRequest,
  BulkUpdateProductRequest,
  UpdateProductRequest,
} from "@repo/models";
import { getBaseQueryWithAuth } from "./apiClient";
import { PagingResponse } from "@repo/models";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Product"],
  baseQuery: getBaseQueryWithAuth("products"),
  endpoints: (builder) => ({
    get: builder.query<PagingResponse<Product>, ProductPagingRequest>({
      query: (params) => ({
        method: "GET",
        url: "",
        params,
      }),
      providesTags: [{ type: "Product", id: "LIST" }],
    }),
    bulkUpdateProducts: builder.mutation<void, BulkUpdateProductRequest>({
      query: (params) => ({
        method: "PUT",
        params,
        url: "",
        body: {
          type: params.type,
          forSale: params.forSale,
          brandId: params.brandId,
        },
      }),
      invalidatesTags: (_, error) =>
        error ? [] : [{ type: "Product", id: "LIST" }],
    }),
    getById: builder.query<Product, GetProductDetailRequest>({
      query: (request) => ({
        method: "GET",
        url: `${request?.productId}?includeVendorPrice=true`,
        params: {
          shopId: request?.shopId,
        },
      }),
    }),
    create: builder.mutation<Product, CreateProductRequest>({
      query: (body) => ({ method: "POST", url: "", body }),
      invalidatesTags: (_, error) =>
        error ? [] : [{ type: "Product", id: "LIST" }],
    }),
    update: builder.mutation<Product, UpdateProductRequest>({
      query: (body) => ({ method: "PUT", url: `/${body.id}`, body }),
      invalidatesTags: (_, error) =>
        error ? [] : [{ type: "Product", id: "LIST" }],
    }),

    delete: builder.mutation<void, string>({
      query: (id) => ({ method: "DELETE", url: `/${id}` }),
      invalidatesTags: (_, error) =>
        error ? [] : [{ type: "Product", id: "LIST" }],
    }),
    deleteByIds: builder.mutation<void, string[]>({
      query: (productIds) => ({
        method: "DELETE",
        url: "",
        body: { productIds },
      }),
      invalidatesTags: (_, error) =>
        error ? [] : [{ type: "Product", id: "LIST" }],
    }),
    getColors: builder.query<string[], string | undefined>({
      query: (shopId) => ({
        method: "GET",
        url: "/colors",
        params: { shopId },
      }),
    }),
    getSizes: builder.query<string[], string | undefined>({
      query: (shopId) => ({
        method: "GET",
        url: "/sizes",
        params: { shopId },
      }),
    }),
  }),
});
