import { TCompanyServer } from 'src/_types/companies';

export type TCreateCompanyArgs = {
  name: string;
  address: string;
}

export type TCreateCompanyResult = {
  company: TCompanyServer;
}
