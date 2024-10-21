import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://petlove.b.goit.study/api',
});
