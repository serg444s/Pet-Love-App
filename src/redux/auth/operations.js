import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient, setAuthHeader, clearAuthHeader } from './apiClient';

const asyncThunkWrapper = asyncFunction => async (args, thunkAPI) => {
  try {
    return await asyncFunction(args, thunkAPI);
  } catch (error) {
    const serializableError = {
      message: error.message,
      name: error.name,
      code: error.code,
      response: error.response
        ? {
            status: error.response.status,
            data: error.response.data,
          }
        : undefined,
    };
    return thunkAPI.rejectWithValue(serializableError);
  }
};

export const registerUser = createAsyncThunk(
  'users/signup',
  asyncThunkWrapper(async ({ name, email, password }) => {
    const { data } = await apiClient.post('/users/signup', {
      name,
      email,
      password,
    });
    console.log('registerUser data', data);
    setAuthHeader(data.data.token);
    return data;
  })
);

export const logIn = createAsyncThunk(
  'users/signin',
  asyncThunkWrapper(async ({ email, password }) => {
    const { data } = await apiClient.post('/users/signin', { email, password });
    console.log('logIn data', data);
    setAuthHeader(data.data.token);
    return data;
  })
);

export const logOut = createAsyncThunk(
  'users/signout',
  asyncThunkWrapper(async () => {
    await apiClient.post('/users/signout');
    clearAuthHeader();
  })
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  asyncThunkWrapper(async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkApi.rejectWithValue('No token found');
    }

    setAuthHeader(persistedToken);

    try {
      const { data } = await apiClient.post('/users/refresh-token');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  })
);

export const getUserProfile = createAsyncThunk(
  'users/current',
  asyncThunkWrapper(async () => {
    const { data } = await apiClient.get('/users/current');
    return data.data;
  })
);

export const updateUserProfile = createAsyncThunk(
  'users/current/edit',
  asyncThunkWrapper(async user => {
    const { data } = await apiClient.patch('/users/current/edit', user);
    return data;
  })
);
