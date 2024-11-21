import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { logoutLoader, protectedLoader, rootLoader } from "@repo/utils/helpers";
import { authProvider } from "@repo/ui/contexts";

import { productRoutes } from "./pages/product";

import AuthenticatedContainer from "./containers/AuthenticatedContainer";

import { SpinLoading } from "@ui/components";


const protectedRoutes: RouteObject[] = [
 
  {
    id: "products",
    path: "/products",
    children: productRoutes,
  },

];

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader: rootLoader,
    children: [
      {
        path: "login",
        // Component: LoginPage,
      },
      {
        path: "logout",
        loader: logoutLoader(authProvider),
      },
      {
        id: "auth",
        path: "",
        loader: protectedLoader(authProvider),
        Component: AuthenticatedContainer,
        children: protectedRoutes,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} fallbackElement={<SpinLoading />} />;
};

export default Router;
