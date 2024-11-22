import { companiesSlice } from './';
import { TRootState } from '../types';
import { TCompaniesState } from './types';

const selector = (store: TRootState): TCompaniesState =>
  store['companies'] || companiesSlice.getInitialState();

export const getCompaniesSelector = (store: TRootState) => selector(store).companies;
export const getCompaniesLastCursorSelector = (store: TRootState) => selector(store).lastCursor;
export const getIsSelectedAllCompaniesSelector = (store: TRootState) => selector(store).isSelectedAllCompanies;
export const getIsLoadingManyDeletesSelector = (store: TRootState) => selector(store).isLoadingManyDeletes;
