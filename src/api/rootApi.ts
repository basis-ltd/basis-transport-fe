import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { localStorageAdapter } from '@/adapters/storage/localStorage.adapter';

const prepareHeaders = (headers: Headers) => {
  const token = localStorageAdapter.getItem('token');
  const randomKey = crypto.randomUUID();
  if (token) {
    headers.set('authorization', `Bearer ${token}`);
  }
  headers.set('x-idempotency-key', randomKey);
  return headers;
};

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders,
});
