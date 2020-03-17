import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';

import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';


export interface LoginState {
  session: UserSession;
  token: number;
}
export interface UserSession{
  userName:string ,
  userId:number,
  companyId:number,
}

const initialState: LoginState = {
  session: null,
  token:null,
}

const loginReducer = createReducer(
  initialState,
  on(LoginActions.setSession, (state, { loggedUserSession }) => ({ session : loggedUserSession }))
);

export function reducer(state:LoginState, action:Action){
  return loginReducer(state,action);
}
