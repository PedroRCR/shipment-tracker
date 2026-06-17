import { Shipment } from '../../../shipment/models/entities/shipment';

export interface DashboardState {
  supplierShipmentsList: Shipment[];
}

export const initialDashboardState: DashboardState = {
  supplierShipmentsList: [],
};
