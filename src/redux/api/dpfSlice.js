import { API } from "@/lib/Constant/Constant";
import { apiSlice } from "./apiSlice";

export const pdfApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadPdf: builder.mutation({
      query: (formData) => {
        return {
          url: `${API.PDF}`,
          method: "POST",
          body: formData,
        };
      },
    }),

    sendMail: builder.mutation({
      query: (data) => {
        return {
          url: `${API.SEND_RECRUITMENT}`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useUploadPdfMutation, useSendMailMutation } = pdfApiSlice;
