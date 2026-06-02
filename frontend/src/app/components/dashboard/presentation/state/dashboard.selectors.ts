import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const selectDashboardState =
  createFeatureSelector<DashboardState>('dashboard');


export const userRoleSelector = createSelector(
  selectDashboardState,
  (state) => state.userRole
);