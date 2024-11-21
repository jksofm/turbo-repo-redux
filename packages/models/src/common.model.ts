import { ReactNode } from "react";

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface PagingRequest {
  page: number;
  limit: number;
  sort?: string;
}

export interface SortRequest {
  sort?: string;
}

export interface PagingResponse<T> {
  items: T[];
  page: number;
  limit: number;
  count: number;
  pageCount: number;
}

export type RenderActionButtonsType = (
  id: string,
  addId?: string,
  isSubscribed?: boolean,
) => ReactNode;

export interface UseRTKQueryOptions {
  skip?: boolean;
  pollingInterval?: number;
  refetchOnMountOrArgChange?: boolean | number;
  refetchOnFocus?: boolean;
  refetchOnReconnect?: boolean;
  skipPollingIfUnfocused?: boolean;
}

export interface ErrorData {
  error?: string;
  message: string | string[];
  statusCode: number;
}
export interface ServerError {
  data: ErrorData;
  status: number;
}
export interface DataConfiguration {
  maxPrice?: number;
  extensionVersion?: string;
}
export interface Configuration {
  data: DataConfiguration;
}
