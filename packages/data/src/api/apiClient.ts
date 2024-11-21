import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiUrl } from "@repo/constants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

export const getBaseQuery = (path: string) =>
  fetchBaseQuery({
    baseUrl: `${apiUrl}${path}`,
    credentials: "include",
  });

export const getBaseQueryWithAuth = (path: string) => {
  const baseQuery = getBaseQuery(path);
  const baseQueryWithReauth: ReturnType<typeof getBaseQuery> = async (
    args,
    api,
    extraOptions,
  ) => {
    const result = await baseQuery(args, api, extraOptions);

    if (
      result.error &&
      (result.error.status === 401 || result.error.status === 403)
    ) {
      // Directly changing window.location.href because we're outside of the React component lifecycle.
      // React Router's useNavigate hook or similar functions are not accessible here.
      // This approach causes a full page reload, which is a downside in a SPA context.
      // Consider a more integrated approach if preserving SPA behavior is crucial.
      window.location.href = "/login";
    }
    return result;
  };
  return baseQueryWithReauth;
};

export default apiClient;
