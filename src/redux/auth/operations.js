import { createAsyncThunk } from '@reduxjs/toolkit';

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
  'auth/register',
  asyncThunkWrapper(async user => {
    const { data } = await apiClient.post('/users/register', user);
    setAuthHeader(data.data.accessToken);
    return data;
  })
);
export const logIn = createAsyncThunk(
  'auth/login',
  asyncThunkWrapper(async user => {
    const { data } = await apiClient.post('/users/login', user);
    setAuthHeader(data.data.accessToken);
    return data;
  })
);

export const logOut = createAsyncThunk(
  'auth/logout',
  asyncThunkWrapper(async () => {
    await apiClient.post('/users/logout');
    clearAuthHeader();
  })
);
