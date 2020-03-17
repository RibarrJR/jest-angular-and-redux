import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoginState, UserSession, loginFeatureKey } from './login.reducer';

export const selectFeature = createFeatureSelector(loginFeatureKey);

export const selectSession = createSelector(
  selectFeature,
  (LoggedUserSession: UserSession) => LoggedUserSession
);
