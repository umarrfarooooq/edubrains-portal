import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './tabSlice';
import formReducer from './formSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    tabs: tabReducer,
    form: formReducer,
    user: userReducer
  },
  devTools: true,
});