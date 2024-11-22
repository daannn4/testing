import { store } from './';

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
