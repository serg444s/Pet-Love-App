import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../apiClient';

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const res = await apiClient.post('/users/signup', {
        name,
        email,
        password,
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await apiClient.post('/users/signin', { email, password });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const res = await apiClient.post('/users/signout');
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
