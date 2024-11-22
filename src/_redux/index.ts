import { configureStore } from '@reduxjs/toolkit';
import { companiesApi } from 'src/api/requests/companies/api';
import { companiesSlice } from './companies';

export const store = configureStore({
  reducer: {
    companies: companiesSlice.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(companiesApi.middleware)
});
