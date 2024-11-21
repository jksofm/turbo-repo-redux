import { RouteObject } from "react-router-dom";
import { ProductCreate, ProductEdit } from "@repo/ui/pages/product";
import ProductList from "./ProductList";

const productRoutes: RouteObject[] = [
  {
    id: "product-list",
    path: "",
    element: <ProductList />,
  },
  {
    id: "product-create",
    path: "new",
    element: <ProductCreate />,
  },
  {
    id: "product-edit",
    path: ":productId",
    element: <ProductEdit />,
  },
];

export default productRoutes;
