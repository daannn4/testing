import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TCompaniesState } from './types';
import { TCompany } from 'src/_types/companies';

const initialState: TCompaniesState = {
  companies: [],
  lastCursor: 0,
  isSelectedAllCompanies: false,
  isLoadingManyDeletes: false
};

export const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    toggleSelectCompany(state, { payload }: PayloadAction<number>) {
      state.companies = state.companies.map((company) => {
        if(company.id === payload) {
          company.isSelected = !company.isSelected;
        }

        return company;
      });
    },
    filterCompanies(state, { payload }: PayloadAction<number[]>) {
      state.companies = state.companies.filter(({ id }) => !payload.includes(id));
    },
    addCompanies(state, { payload }: PayloadAction<TCompany[]>) {
      state.companies = [...state.companies, ...payload];
    },
    setLastCursor(state, { payload }: PayloadAction<number>) {
      state.lastCursor = payload;
    },
    toggleSelectAllCompanies(state) {
      state.isSelectedAllCompanies = !state.isSelectedAllCompanies;
      state.companies = state.companies.map((company) => ({
        ...company,
        isSelected: state.isSelectedAllCompanies
      }));
    },
    startLoadingManyDeletes(state) {
      state.isLoadingManyDeletes = true;
    },
    stopLoadingManyDeletes(state) {
      state.isLoadingManyDeletes = false;
    }
  }
});

export const {
  toggleSelectCompany,
  addCompanies,
  setLastCursor,
  filterCompanies,
  toggleSelectAllCompanies,
  startLoadingManyDeletes,
  stopLoadingManyDeletes
} = companiesSlice.actions;

