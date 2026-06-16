import { Shipment } from '../../../domain/entities/shipment';
import { ShipmentEvent } from '../../../domain/entities/shipmentEvent';

export interface ShipmentState {
  currentShipment?: Shipment;
  currentShipmentEvents?: ShipmentEvent[];
}

export const initialShipmentState: ShipmentState = {
  currentShipment: undefined,
  currentShipmentEvents: [],
};
