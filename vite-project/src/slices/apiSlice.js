
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000', // Backend URL
        credentials: 'include', // Include cookies if your backend uses them
    }),
    endpoints: (builder) => ({}),
});
