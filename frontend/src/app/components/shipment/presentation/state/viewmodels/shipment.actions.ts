import { createAction, props } from "@ngrx/store";
import { Shipment } from "../../../domain/entities/shipment";
import { ShipmentEvent } from "../../../domain/entities/shipmentEvent";

export enum ShipmentTypes {
  setCurrentShipment = '[Shipment] Set current shipment',
  getShipmentEvents = '[Shipment] Get shipment events',
  getShipmentEventsSuccess = '[Shipment] Get shipment events success',
  getShipmentEventsFail = '[Shipment] Get shipment events fail',
}

export const setCurrentShipment = createAction(
  ShipmentTypes.setCurrentShipment,
  props<{ shipment: Shipment }>()
);

export const getShipmentEvents = createAction(
  ShipmentTypes.getShipmentEvents,
  props<{ shipmentId: number }>()
);

export const getShipmentEventsSuccess = createAction(
  ShipmentTypes.getShipmentEventsSuccess,
  props<{ shipmentEventsList: ShipmentEvent[] }>()
);
