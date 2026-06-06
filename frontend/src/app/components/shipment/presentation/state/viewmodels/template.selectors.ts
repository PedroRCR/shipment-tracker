/**import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './template.state';

export const selectLoginState =
  createFeatureSelector<LoginState>('login');


export const userRoleSelector = createSelector(
  selectLoginState,
  (state) => state.userRole
);
*/