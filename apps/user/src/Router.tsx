import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";


import { logoutLoader, rootLoader } from "@repo/utils/helpers";
import { authProvider } from "@repo/ui/contexts";

import { Home } from "./pages/home";
import { AuthenticatedContainer } from "./containers";
import { Video } from "./pages/video";



const protectedRoutes: RouteObject[] = [
  {
    id: "home",
    path: "",
    Component: Home ,
  },
  {
    id: "video-detail",
    path: "video",
    Component: Video
  }


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
        // loader: protectedLoader(authProvider),
        Component: AuthenticatedContainer,
        children: protectedRoutes,
      },
     
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router}  />;
};

export default Router;
