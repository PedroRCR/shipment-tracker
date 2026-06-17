import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShipmentState } from './shipment.state';

export const selectShipmentState =
  createFeatureSelector<ShipmentState>('shipment');

export const currentShipmentSelector = createSelector(
  selectShipmentState,
  (state) => state.currentShipment,
);

export const currentShipmentEventsSelector = createSelector(
  selectShipmentState,
  (state) => state.currentShipmentEvents,
);
