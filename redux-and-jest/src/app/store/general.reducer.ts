import { Action, createReducer, on } from '@ngrx/store';

import * as GeneralActions from '../store/general.actions';

export const generalFeatureKey = 'General';

export interface GeneralState {
  loading: boolean;
  token: number;
}

const initialState: GeneralState = {
  loading: false,
  token: 0,
}

const generalReducer = createReducer(
  initialState,
  on(GeneralActions.changeLoading, (state, { loading }) => ({ loading : loading }))
);

export function reducer(state:GeneralState, action:Action){
  return generalReducer(state,action);
}
