import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './slices/sidebarSlice';
import authSlice from './slices/authSlice';
import { apiSlice } from '@/api/mutations/apiSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
