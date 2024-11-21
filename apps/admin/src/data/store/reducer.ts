import { Middleware } from "@reduxjs/toolkit";
import { shopApi } from "@repo/data/api";

export const reducer = {
  [shopApi.reducerPath]: shopApi.reducer,
};

export const middlewares: Middleware[] = [shopApi.middleware];
