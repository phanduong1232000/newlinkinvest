import { API } from "@/utils/contant.js";
import { apiSlice } from "./apiSlice.js";

export const checkoutApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        return {
          url: `${API.AUTH}/login`,
          method: "POST",
          body: data,
        };
      },
    }),

    register: builder.mutation({
      query: (data) => {
        return {
          url: `${API.AUTH}/register`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = checkoutApiSlice;
