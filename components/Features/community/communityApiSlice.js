import { apiSlice } from "../../app/api/apiSlice";

export const communityApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommunities: builder.mutation({
      query: () => ({
        url: "communities/all",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllCommunitiesMutation } = communityApiSlice;
