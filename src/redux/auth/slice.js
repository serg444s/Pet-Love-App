import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  getUserProfile,
  updateUserProfile,
  registerUser,
} from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    _id: null,
    email: null,
    name: null,
    avatar: null,
    phone: null,
    noticesViewed: [],
    noticesFavorites: [],
    pets: [],
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.user = initialState.user;
        state.token = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addCase(getUserProfile.pending, handlePending)
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUserProfile.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePending)
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.loading = false;
        state.error = null;
      });
  },
});

export const { updateToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
