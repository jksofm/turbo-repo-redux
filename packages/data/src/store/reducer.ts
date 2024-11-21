import {

  productApi,
 
  userApi,
} from "@repo/data/api";
import { persistReducer } from "redux-persist";
import { getPersistConfig } from "./store.helper";
import { Middleware } from "@reduxjs/toolkit";
import {
  productListSlice,

} from "../slices";
import { rtkQueryErrorBoundary } from "../middleware";
import { userSlice } from "../slices";
import storage from "redux-persist/lib/storage";

import { appSlice } from "../slices/app.slice";

export const rootReducer = {
  [userApi.reducerPath]: userApi.reducer,
  [productApi.reducerPath]: productApi.reducer,

  [userSlice.reducerPath]: persistReducer(
    getPersistConfig(userSlice.reducerPath),
    userSlice.reducer,
  ),
 
  [appSlice.reducerPath]: appSlice.reducer,
  [productListSlice.reducerPath]: persistReducer(
    {
      key: productListSlice.reducerPath,
      storage: storage,
      whitelist: ["isSubscribed", "isOptimized"],
    },
    productListSlice.reducer,
  ),



};

export const rootMiddlewares: Middleware[] = [
  rtkQueryErrorBoundary,
  userApi.middleware,
  productApi.middleware,
 
];
