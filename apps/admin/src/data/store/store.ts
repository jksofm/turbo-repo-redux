import { rootMiddlewares, rootReducer } from "@repo/data/store";
import { configureStore } from "@reduxjs/toolkit";
import { middlewares, reducer } from "./reducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    ...rootReducer,
    ...reducer,
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: false,
    })
      .concat(rootMiddlewares)
      .concat(middlewares),
});

type StoreType = typeof store;

export type AppDispatch = StoreType["dispatch"];
export type AppState = ReturnType<StoreType["getState"]>;

export const persistor = persistStore(store);
