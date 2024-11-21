import { RouteObject } from "react-router-dom";
import { Extension } from "./Extension";

export const extensionRoute: RouteObject[] = [
  {
    id: "extension-download",
    path: "",
    element: <Extension />,
  },
];
