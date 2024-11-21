import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { paginationSlice } from "./pagination.slice";

export interface TableState {
  searchKeyword?: string;
  sort?: string;
  selectedRowIds: string[];
}

export const initialState: TableState = {
  selectedRowIds: [],
};

export const createTableSlice = <T>(filter: T) => {
  const combinedState = {
    ...paginationSlice.getInitialState(),
    ...initialState,
    filter,
  };
  return createSlice({
    name: "table",
    initialState: combinedState,
    selectors: {
      listForm: ({ filter, pagination, searchKeyword, sort }) => ({
        ...filter,
        ...pagination,
        searchKeyword,
        sort,
      }),
    },
    reducers: {
      ...paginationSlice.caseReducers,
      setSearchKeyword: (state, { payload }: PayloadAction<string>) => {
        state.searchKeyword = payload;
      },

      setSort: (state, { payload }: PayloadAction<string>) => {
        state.sort = payload;
      },

      setFilter: (state, { payload }: PayloadAction<T>) => {
        state.filter = payload as Draft<T>;
      },
      setSelectedRowKeys: (state, { payload }: PayloadAction<string[]>) => {
        state.selectedRowIds = payload;
      },
      selectRowId: (state, { payload }: PayloadAction<string>) => {
        const newSelectedRowIds = state.selectedRowIds.filter(
          (id) => id !== payload,
        );
        if (state.selectedRowIds.length === newSelectedRowIds.length) {
          state.selectedRowIds = newSelectedRowIds;
        }
      },
    },
  });
};
