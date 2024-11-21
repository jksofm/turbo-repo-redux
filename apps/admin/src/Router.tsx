import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { logoutLoader, protectedLoader, rootLoader } from "@repo/utils/helpers";
import { authProvider } from "@repo/ui/contexts";


import AuthenticatedContainer from "./containers/AuthenticatedContainer";



const protectedRoutes: RouteObject[] = [
 
  {
    id: "products",
    path: "/products",
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
  return <RouterProvider router={router} />;
};

export default Router;
