import { defaultPagination } from "@repo/constants";
import { ProductListFilter } from "@repo/models";

const basePath = "/products";
const productPath = {
  list: () =>
    `${basePath}?page=${defaultPagination.page}&limit=${defaultPagination.limit}`,
  detail: (productId: string) => `${basePath}/${productId}`,
  new: () => `${basePath}/new`,
  // listWithPersistParams: (state: ProductListFilter) =>
  //   `${convertObjectToParams(state, basePath)}`,
  basePath: () => basePath,
  syncHistory: () =>
    `${basePath}/sync-history?page=${defaultPagination.page}&limit=${defaultPagination.limit}`,
};

export default productPath;
