import { Shipment } from '../../../models/entities/shipment';
import { ShipmentEvent } from '../../../models/entities/shipmentEvent';

export interface ShipmentState {
  currentShipment: Shipment | null;
  currentShipmentEvents: ShipmentEvent[];
}

export const initialShipmentState: ShipmentState = {
  currentShipment: null,
  currentShipmentEvents: [],
};
