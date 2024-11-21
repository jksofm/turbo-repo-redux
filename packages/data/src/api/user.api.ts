import {
  User,
  UpdateUserProfileRequest,

} from "@repo/models";
import { getBaseQueryWithAuth } from "./apiClient";
import { Shop } from "@repo/models";
import { createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["User"],
  baseQuery: getBaseQueryWithAuth("users"),
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => ({ method: "GET", url: "profile" }),
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation<User, UpdateUserProfileRequest>({
      query: (body) => ({ method: "PUT", url: "profile", body }),
      invalidatesTags: ["User"],
    }),
    getShops: builder.query<Shop[], void>({
      query: () => ({ method: "GET", url: "shops" }),
    }),
  
 
  }),
});
