import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { api } from "./slice/apiSlice";
import authSlice from "./slice/authSlice";
import appointmentsSlice from "./slice/appointmentsSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    appointments: appointmentsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
