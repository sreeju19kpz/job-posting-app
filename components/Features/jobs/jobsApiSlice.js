import { apiSlice } from "../../app/api/apiSlice";

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.mutation({
      query: () => ({
        url: "jobs/all",
        method: "GET",
      }),
    }),
    getSingleJob: builder.mutation({
      query: (credentials) => ({
        url: `jobs/${credentials.id}/banner`,
        method: "GET",
      }),
    }),
    getJobDetails: builder.mutation({
      query: (credentials) => ({
        url: `jobs/${credentials.id}`,
        method: "GET",
      }),
    }),
    getAllAppliedJobs: builder.mutation({
      query: () => ({
        url: "jobapplications/all",
        method: "GET",
      }),
    }),
    applyForJob: builder.mutation({
      query: (credentials) => ({
        url: "jobapplications/",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    getJobStatus: builder.mutation({
      query: (credentials) => ({
        url: `jobapplications/${credentials.id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useGetAllJobsMutation,
  useGetSingleJobMutation,
  useGetJobDetailsMutation,
  useGetAllAppliedJobsMutation,
  useApplyForJobMutation,
  useGetJobStatusMutation,
} = jobsApiSlice;
