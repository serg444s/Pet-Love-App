import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
