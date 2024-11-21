import { PagingRequest } from "./common.model";

export interface Activity {
  id: string;
  user: {
    email: string;
    fullName: string;
    id: string;
    avatar: string;
  };
  product: {
    id: string;
    name: string;
  };
  createdAt: string;
  action: string;
  ipAddress: string;
}

export interface ActivityPagingRequest extends PagingRequest {
  searchKeyword?: string;
  toDate?: string;
  fromDate?: string;
  userId?: string;
  shopId?: string;
}

export interface ActivityListForm extends ActivityPagingRequest {}
