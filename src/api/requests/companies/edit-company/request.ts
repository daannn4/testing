import { TBaseQuery } from 'src/_types/api';
import { TEditCompanyArgs } from './types';

export const editCompanyQuery: TBaseQuery<TEditCompanyArgs> = (args) => ({
  url: '/companies-edit',
  method: 'POST',
  body: args
});
