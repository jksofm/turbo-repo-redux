import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ProductListFilter,

} from "@repo/models";
import { createTableSlice } from "./common/table.slice";

const productListFilter: ProductListFilter = {};
const productTableSlice = createTableSlice(productListFilter);

interface ProductListState {


}

const initialState: ProductListState = {

};
// type Key =
//   | keyof ProductListForm
//   | keyof ProductListFilter
//   | keyof ProductListState;

export const productListSlice = createSlice({
  name: "productList",
  initialState: {
    ...productTableSlice.getInitialState(),
    ...initialState,
  },
  selectors: {
    ...productTableSlice.getSelectors(),
  },
  reducers: {
    ...productTableSlice.caseReducers,
  


  },
});

export const productListSelector = createSelector(
  [
    (state) => state.pagination.page,
    (state) => state.pagination.limit,
    (state) => state.sort,
    (state) => state.filter.name,
    (state) => state.searchKeyword,
    
  ],
  (
    page,
    limit,
    sort,
    name,
    searchKeyword,
   
  ) => {
    return {
      page,
      limit,
      sort,
      name,
      searchKeyword,
     
    };
  },
);
