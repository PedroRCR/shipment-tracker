import { createReducer, on } from '@ngrx/store';
import { initialShipmentState } from './shipment.state';
import {
  getShipmentEventsSuccess,
  setCurrentShipment,
  setCurrentShipmentSuccess,
} from './shipment.actions';

export const shipmentReducer = createReducer(
  initialShipmentState,

  on(setCurrentShipmentSuccess, (state, { shipment }) => ({
    ...state,
    currentShipment: shipment,
  })),

  on(getShipmentEventsSuccess, (state, { shipmentEventsList }) => ({
    ...state,
    currentShipmentEvents: shipmentEventsList,
  })),
);
