import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
// import { petsReducer } from './pets/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // pets: petsReducer,
  },
});
