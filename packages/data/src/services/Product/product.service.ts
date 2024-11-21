import {
  UpdateProductForm,
  ProductPagingRequest,
 
} from "@repo/models";
import { productApi } from "@data/api";
import { useMemo } from "react";
import { useAppSelector } from "@data/store";
import { UseRTKQueryOptions } from "@repo/models";
import { productListSelector } from "@data/slices";


export const productService = {
  useGet: (isSubscribed?: boolean, options?: UseRTKQueryOptions) => {
    const productListForm = productListSelector(
      useAppSelector((s) => s.productList),
    );

    const shopId = useAppSelector((s) => s.user.selectedShop)?.id;

    const productPagingRequest = useMemo(() => {
      const { ...productFilterRequest } =
        productListForm;

      const productPagingRequest: ProductPagingRequest = {
        ...productFilterRequest,
      };
   

      return productPagingRequest;
    }, [productListForm, isSubscribed, shopId]);

    return productApi.useGetQuery(productPagingRequest!, {
      ...options,
      skip: !productPagingRequest || (isSubscribed && !shopId),
    });
  },

  useUpdate: () => {
    const [updateProduct, productUpdateResult] = productApi.useUpdateMutation();
    const shopId = useAppSelector((s) => s.user.selectedShop)?.id;

    const request = (id: string, productEditForm: UpdateProductForm) => {
      const sizes = productEditForm?.sizes?.map((size) => ({
        size,
        extendedPrice: "",
      }));

      const images = productEditForm?.images
        ?.filter((image) => !image.variantId)
        .map((image) => ({
          url: image.url ?? image?.response?.url,
          color: "",
        }))
        .filter((image) => image.url);

         
               
          
      const productUpdateRequest = {
        ...productEditForm,
        id,
        sizes,
        images,
        shopId,
      };

      if (productUpdateRequest.price === null) {
        delete productUpdateRequest.price;
      }

      return updateProduct(productUpdateRequest);
    };
    return {
      ...productUpdateResult,
      request,
    };
  },

};
