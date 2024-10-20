import axios from 'axios';
import { store } from '../store';
import { updateToken } from './slice';
import { logOut } from './operations';

export const apiClient = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
  withCredentials: false,
});

let isRefreshing = false;
let refreshSubscribers = [];

export const setAuthHeader = token => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete apiClient.defaults.headers.common['Authorization'];
};

export const onRefreshed = token => {
  refreshSubscribers.map(callback => callback(token));
};

export const addRefreshSubscriber = callback => {
  refreshSubscribers.push(callback);
};

apiClient.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(resolve => {
          addRefreshSubscriber(token => {
            originalRequest.headers['Authorization'] = `Bearer ${token}`;
            resolve(apiClient(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          'https://aquatrack-backend.onrender.com/users/refresh-token',
          {},
          { withCredentials: true }
        );
        const { token } = response.data.data;

        store.dispatch(updateToken(token));
        setAuthHeader(token);
        isRefreshing = false;
        onRefreshed(token);

        refreshSubscribers = [];
        return apiClient(originalRequest);
      } catch (err) {
        isRefreshing = false;
        refreshSubscribers = [];
        store.dispatch(logOut());
        clearAuthHeader();
      }
    }
    return Promise.reject(error);
  }
);
