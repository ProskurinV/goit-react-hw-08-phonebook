import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    errorLogIn(state, action) {
      state.authError = action.payload;
    },
    errorRegister(state, action) {
      state.authError = action.payload;
    },
  },
  extraReducers: {
    [register.pending](state) {
      state.authError = null;
    },
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authError = null;
    },
    [register.rejected](state, action) {
      state.isLoggedIn = false;
      state.authError = action.payload;
    },
    [logIn.pending](state) {
      state.authError = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authError = null;
    },
    [logIn.rejected](state, action) {
      state.isLoggedIn = false;
      state.authError = action.payload;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const { errorLogIn, errorRegister } = authSlice.actions;

export const authReducer = authSlice.reducer;
