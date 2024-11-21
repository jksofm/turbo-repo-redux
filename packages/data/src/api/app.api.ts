import { User } from "@repo/models";
import axiosClient from "./apiClient";
import { LoginForm, LoginShopForm } from "@repo/models/auth";
import apiClient from "./apiClient";

export const appApi = {
  login: (loginForm: LoginForm) => {
    const url = `/auth/login`;
    return axiosClient.post<User>(url, loginForm);
  },
  loginShopForm: (loginShopForm: LoginShopForm) => {
    return axiosClient.post<void>("/auth/shop-form/login", loginShopForm);
  },
  logout: () => {
    const url = `/auth/logout`;
    return axiosClient.post(url);
  },
  logoutShopForm: () => {
    const url = `/auth/shop-form/logout`;
    return axiosClient.post(url);
  },
  verify: async () => {
    return apiClient.get(`/users/profile`);
  },
  getConfiguration: async () => {
    return apiClient.get(`configuration`);
  },
};
