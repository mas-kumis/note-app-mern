import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Admin"],
  endpoints: () => ({}),
});

// Kode ini adalah konfigurasi untuk menghubungkan aplikasi React dengan backend menggunakan Redux Toolkit Query.
// createApi digunakan untuk membuat API endpoint yang dapat digunakan dalam aplikasi.
// baseQuery digunakan untuk mengatur URL backend.
// tagTypes digunakan untuk memberi tag pada endpoint yang dapat digunakan oleh Redux Toolkit.
// endpoints digunakan untuk mendefinisikan endpoint yang akan digunakan dalam aplikasi.
