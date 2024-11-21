import { appService } from "@data/services";
import {
  IS_AUTHENTICATED,
  IS_SHOP_FORM_AUTHENTICATED,
  commonMessage,
} from "@repo/constants";
import { LoginForm, LoginShopForm } from "@repo/models/auth";
import { message } from "antd";
import { AxiosError } from "axios";

export interface AuthProvider {
  isAuthenticated: boolean;
  login(loginForm: LoginForm): Promise<void>;
  logout(): Promise<void>;
}

export const authProvider: AuthProvider = {
  isAuthenticated: !!localStorage.getItem(IS_AUTHENTICATED),
  async login(loginForm: LoginForm) {
    try {
      await appService.login(loginForm);
      authProvider.isAuthenticated = true;
      localStorage.setItem(IS_AUTHENTICATED, "true");
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        message.error(e.response?.data?.message);
      } else {
        message.error(commonMessage.loginFail);
      }
      return;
    }
  },
  async logout() {
    appService.logout();
    authProvider.isAuthenticated = false;
    localStorage.clear();
  },
};

export const authShopFormProvider: AuthProvider = {
  isAuthenticated: !!localStorage.getItem(IS_AUTHENTICATED),
  async login(loginShopForm: LoginShopForm) {
    try {
      await appService.loginShopForm(loginShopForm);
      authShopFormProvider.isAuthenticated = true;
      localStorage.setItem(IS_SHOP_FORM_AUTHENTICATED, "true");
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        message.error(e.response?.data?.message);
      } else {
        message.error(commonMessage.loginFail);
      }
    }
  },
  async logout() {
    appService.logoutShopForm();
    authShopFormProvider.isAuthenticated = false;
    localStorage.clear();
  },
};
