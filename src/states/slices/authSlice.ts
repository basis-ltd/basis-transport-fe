import { localStorageAdapter } from '@/adapters/storage/localStorage.adapter';
import { User } from '@/types/user.type';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  user?: User;
  token?: string;
}

const initialState: AuthState = {
  user: localStorageAdapter.getItem('user') || undefined,
  token: localStorageAdapter.getItem('token') || undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogout: (state) => {
      state.user = undefined;
      state.token = undefined;
      localStorageAdapter.removeItem('user');
      localStorageAdapter.removeItem('token');
    },
  },
});

export const { setUser, setToken, setLogout } = authSlice.actions;

export default authSlice.reducer;
