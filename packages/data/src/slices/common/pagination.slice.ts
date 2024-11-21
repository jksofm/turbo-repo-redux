import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PagingRequest } from "@repo/models";
import { defaultPagination } from "@repo/constants";

interface PaginationState {
  pagination: PagingRequest;
}

const initialState: PaginationState = {
  pagination: {
    page: defaultPagination.page,
    limit: defaultPagination.limit,
  },
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPagination: (state, { payload }: PayloadAction<PagingRequest>) => {
      state.pagination = payload;
    },
  },
});
