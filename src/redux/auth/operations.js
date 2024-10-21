import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { apiClient, setAuthHeader, clearAuthHeader } from '../apiClient';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await apiClient.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      toast.success('Welcome');
      return res.data;
    } catch (error) {
      toast.error('Some went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await apiClient.post('/users/signin', credentials);
      setAuthHeader(res.data.token);
      toast.success('Welcome');
      return res.data;
    } catch (error) {
      toast.error('Some went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await apiClient.post('/users/signout');
    clearAuthHeader();
  } catch (error) {
    toast.error('Some went wrong');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Error with fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await apiClient.get('/users/current/full');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  'auth/edit',
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Error with fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await apiClient.patch('/users/current/edit', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'auth/addPet',
  async (petData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Error with fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await apiClient.post('/users/current/pets/add', petData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removePet = createAsyncThunk(
  'auth/removePet',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Error with fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await apiClient.delete(`/users/current/pets/remove/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const viewedPet = createAsyncThunk(
  'auth/viewedPet',
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Error with fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await apiClient.get(`/notices/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
