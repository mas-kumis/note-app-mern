import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api/apiSllice";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export default store;

//  (ConigureStore) ini digunakan untuk membuat store Redux yang telah difungsikan dengan Redux Toolkit.
//  (SetupListeners) dari Redux Toolkit digunakan untuk mengatur listener untuk query API.
