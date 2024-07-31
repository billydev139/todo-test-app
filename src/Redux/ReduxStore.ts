import {configureStore} from '@reduxjs/toolkit';
import AppSlice from './Slices/AppSlice';
import HomeSlice from './Slices/HomeSlice.ts';
export const ReduxStore = configureStore({
  reducer: {
    route: AppSlice,
    home: HomeSlice,
  },
});
