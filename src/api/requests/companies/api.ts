import { createApi } from '@reduxjs/toolkit/query/react';
import { addCompanies, filterCompanies, setLastCursor, startLoadingManyDeletes, stopLoadingManyDeletes } from 'src/_redux/companies';
import { getCompanies, createCompany, baseQueryCompanies, editCompany, deleteCompanies } from '.';

export const companiesApi = createApi({
  reducerPath: 'companiesApi',
  baseQuery: baseQueryCompanies,
  endpoints: (builder) => ({
    getCompanies: builder.query<getCompanies.TGetCompanyResult, getCompanies.TGetCompanyArgs>({
      query: getCompanies.getCompaniesQuery,
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;

          dispatch(addCompanies(data.companies));
          dispatch(setLastCursor(data.lastCursor));
        } catch(e) {
          console.error('error get companies');
        }
      }
    }),
    createCompany: builder.mutation<createCompany.TCreateCompanyResult, createCompany.TCreateCompanyArgs>({
      query: createCompany.createCompanyQuery
    }),
    editCompany: builder.mutation<editCompany.TEditCompanyResult, editCompany.TEditCompanyArgs>({
      query: editCompany.editCompanyQuery
    }),
    deleteCompanies: builder.mutation<deleteCompanies.TDeleteCompaniesResult, deleteCompanies.TDeleteCompaniesArgs>({
      query: deleteCompanies.deleteCompaniesQuery,
      onQueryStarted: async ({ ids }, { queryFulfilled, dispatch }) => {
        try {
          if(ids.length > 1) {
            dispatch(startLoadingManyDeletes());
          }
          await queryFulfilled;
          dispatch(stopLoadingManyDeletes());
          dispatch(filterCompanies(ids));
        } catch(e) {
          console.error('error delete companies');
        }
      }
    })
  })
});
