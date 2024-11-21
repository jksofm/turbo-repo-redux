import { PagingRequest } from "./common.model";
import { User } from "./user.model";
export enum Role {
  USER = "User",
  ADMIN = "Admin",
}
export interface Member extends Partial<User> {
  shopCount: number;
  username: string;
  createdAt: string;
}

export interface MemberPagingRequest extends PagingRequest {
  name?: string;
  email?: string;
  createdAt?: string;
  searchKeyword?: string;
  active?: boolean;
  role?: "admin" | "user";
  shopId?: string;
}
export interface MemberListForm extends MemberPagingRequest {
  userId?: string;
  hasShop?: boolean;
}

export interface CreateMemberRequest {
  email: string;
  password: string;
  fullName: string;
  dob?: string;
  shopId?: string;
  role?: "admin" | "user";
}
export interface CreateMemberForm extends CreateMemberRequest {}

export interface UpdateMemberRequest
  extends Omit<CreateMemberRequest, "password"> {
  id: string;
}
export interface UpdateMemberForm extends UpdateMemberRequest {}
export interface MemberTableDateType {
  key: string;
  user: {
    name?: string;
    avatar?: string;
  };
  createdAt: string;
  email: string;
  phone: string;
  activation: {
    active: boolean;
    memberId: string;
  };
  shopCount?: number;
}
export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}
export interface UpdateMemberStatus {
  status: UserStatus.ACTIVE | UserStatus.INACTIVE;
  userId: string;
  shopId?: string;
}
export interface AddMemberForm {
  userId: string;
}
