import { TBaseQuery } from 'src/_types/api';
import { TCreateCompanyArgs } from './types';

export const createCompanyQuery: TBaseQuery<TCreateCompanyArgs> = (args) => ({
  url: '/companies-create',
  method: 'POST',
  body: args
});
