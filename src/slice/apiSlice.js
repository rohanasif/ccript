import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["currentUser", "appointments", "refresh-token"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hiring-test-task.vercel.app/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["currentUser"],
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "/refresh-token",
        method: "POST",
      }),
      invalidatesTags: ["refresh-token", "appointments"],
    }),
    getAppointments: builder.query({
      query: () => ({
        url: "/appointments",
        method: "GET",
      }),
      providesTags: ["appointments"],
    }),
  }),
});

export const {
  useSigninMutation,
  useRefreshTokenMutation,
  useGetAppointmentsQuery,
} = api;
