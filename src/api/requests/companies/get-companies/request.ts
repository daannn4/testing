import { TGetCompanyArgs } from './types';
import { TBaseQuery } from 'src/_types/api';

export const getCompaniesQuery: TBaseQuery<TGetCompanyArgs> = (args) => ({
  url: '/companies-get',
  method: 'POST',
  body: args
});
