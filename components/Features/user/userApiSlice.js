import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getuserBanner: builder.mutation({
      query: () => ({
        url: "users/user/banner",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetuserBannerMutation } = usersApiSlice;
