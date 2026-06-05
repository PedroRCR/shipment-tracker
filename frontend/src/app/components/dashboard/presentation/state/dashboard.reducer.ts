import { createReducer, on } from '@ngrx/store';
import { initialDashboardState } from './dashboard.state';
import { getSupplierShipmentsSuccess } from './dashboard.actions';

export const dashboardReducer = createReducer(
  initialDashboardState,

  on(getSupplierShipmentsSuccess, (state, { shipments }) => ({
    ...state,
    supplierShipmentsList: shipments,
  })),
);
