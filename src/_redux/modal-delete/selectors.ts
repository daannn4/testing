import { modalDeleteSlice } from '.';
import { TRootState } from '../types';
import { TModalDeleteState } from './types';

const selector = (store: TRootState): TModalDeleteState =>
  store['modalDelete'] || modalDeleteSlice.getInitialState();

export const getDeleteIdsSelector = (store: TRootState) => selector(store).deleteIds;
