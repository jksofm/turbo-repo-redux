import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userApi } from "@repo/data/api";
import {  Shop } from "@repo/models";
import { createTableSlice } from "./common/table.slice";

interface UserListFilter {
  name?: string;
  email?: string;
}
const userListFilter: UserListFilter = {};

const userTableSlice = createTableSlice(userListFilter);

interface UserState {
  selectedShop?: Shop;
  shops?: Shop[];
  isAdmin?: boolean;
}

// type Key = keyof UserListFilter | keyof MemberListForm | keyof UserState;

const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    ...userTableSlice.getInitialState(),
    ...initialState,
  },
  selectors: {
    ...userTableSlice.getSelectors(),
  },
  reducers: {
    ...userTableSlice.caseReducers,
    // setTableListFilter: (state, { payload }: PayloadAction<MemberListForm>) => {
    //   const keys: Key[] = ["name", "email", "sort", "searchKeyword"];

    //   clearTableListSlice<MemberListForm, UserListFilter, UserState>({
    //     keys,
    //     state,
    //     payload,
    //   });
    //   for (const [key, value] of Object.entries(payload)) {
    //     if (value) {
    //       handleTableListSlice<MemberListForm>({
    //         state,
    //         key,
    //         value,
    //         payload,
    //       });
    //     }
    //   }
    // },
    resetSelectedShop: (state) => {
      if (state.selectedShop) {
        delete state.selectedShop;
        delete state.shops;
      }
    },
    setSelectedShop: (state, { payload }: PayloadAction<number>) => {
      if (state?.shops?.length && typeof payload === "number") {
        state.selectedShop = state.shops[payload];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getShops.matchFulfilled,
      (state, action) => {
        if (!state.selectedShop) {
          state.selectedShop = action.payload[0];
        }
        state.shops = action.payload;
      },
    );
    builder.addMatcher(
      userApi.endpoints.getProfile.matchFulfilled,
      (state, action) => {
        state.isAdmin = action.payload.role === "admin";
      },
    );
  },
});

export const userListSelector = createSelector(
  [
    (state) => state.pagination.page,
    (state) => state.pagination.limit,
    (state) => state.sort,
    (state) => state.filter.name,
    (state) => state.filter.email,
    (state) => state.searchKeyword,
  ],
  (page, limit, sort, name, email, searchKeyword) => {
    return { page, limit, sort, name, email, searchKeyword };
  },
);
