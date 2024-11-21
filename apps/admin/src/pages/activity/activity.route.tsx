import { RouteObject } from "react-router-dom";
import ActivityList from "./ActivityList";

export const activityRoutes: RouteObject[] = [
  {
    id: "activity-list",
    path: "",
    element: <ActivityList />,
  },
];
