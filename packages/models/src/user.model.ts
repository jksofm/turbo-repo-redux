export interface User {
  id: string;
  email: string;
  fullName: string;
  address: string;
  avatar: string;
  city: string;
  country: string;
  phone: string;
  role: string;
  status: string;
}

export interface UpdateUserProfileRequest {
  email: string;
  fullName: string;
  address: string;
  avatar: string;
  city: string;
  country: string;
  phone: string;
}

export interface RemoveShopUserRequest {
  shopId: string;
  userIds: string[];
}
export interface UpdatePasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword?: string;
}
export type UpdatePasswordRequest = Omit<
  UpdatePasswordForm,
  "confirmNewPassword"
>;

export interface UpdateUserProfileForm extends UpdateUserProfileRequest {}

export interface NotificationSettings {
  id?: string;
  emailNotificationForInventoryAlert?: boolean;

  emailNotificationForRequest?: boolean;

  pushNotificationForInventoryAlert?: boolean;
  pushNotificationForRequest?: boolean;
  smsNotificationForInventoryAlert?: boolean;
  smsNotificationForRequest?: boolean;

  userId: string;
}
export interface UpdateNotificationSettingRequest
  extends Omit<NotificationSettings, "userId" | "id"> {}
