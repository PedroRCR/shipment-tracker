import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const selectDashboardState =
  createFeatureSelector<DashboardState>('dashboard');

export const supplierShipmentsListSelector = createSelector(
  selectDashboardState,
  (state) => state.supplierShipmentsList,
);
