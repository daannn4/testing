import { TCompany } from 'src/_types/companies';

export type TCompaniesState = {
  companies: TCompany[];
  lastCursor: number;
  isSelectedAllCompanies: boolean;
  isLoadingManyDeletes: boolean;
}
