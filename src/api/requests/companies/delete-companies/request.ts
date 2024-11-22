import { TBaseQuery } from 'src/_types/api';
import { TDeleteCompaniesArgs } from './types';

export const deleteCompaniesQuery: TBaseQuery<TDeleteCompaniesArgs> = (args) => ({
  url: '/companies-delete',
  method: 'POST',
  body: args
});
