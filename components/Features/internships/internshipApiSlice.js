import { apiSlice } from "../../app/api/apiSlice";

export const InternshipsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllInternships: builder.mutation({
      query: () => ({
        url: "internships/all",
        method: "GET",
      }),
    }),
    getSingleInternhip: builder.mutation({
      query: (credentials) => ({
        url: `internships/${credentials.id}/banner`,
        method: "GET",
      }),
    }),
    getInternshipDetails: builder.mutation({
      query: (credentials) => ({
        url: `internships/${credentials.id}`,
        method: "GET",
      }),
    }),
    getAllAppliedInternships: builder.mutation({
      query: () => ({
        url: "internshipapplications/all",
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetAllInternshipsMutation,
  useGetSingleInternhipMutation,
  useGetInternshipDetailsMutation,
  useGetAllAppliedInternshipsMutation,
} = InternshipsApiSlice;
