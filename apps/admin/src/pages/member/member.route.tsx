import { RouteObject } from "react-router-dom";
import MemberList from "./MemberList";
import { MemberCreate } from "@repo/ui/pages/member";
export const memberRoutes: RouteObject[] = [
  {
    id: "member-list",
    path: "",
    element: <MemberList />,
  },
  {
    id: "member-create",
    path: "new",
    element: <MemberCreate />,
  },
];
