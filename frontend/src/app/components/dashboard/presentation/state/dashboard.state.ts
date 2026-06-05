import { Shipment } from '../../domain/entities/shipment';

export interface DashboardState {
  supplierShipmentsList: Shipment[];
}

export const initialDashboardState: DashboardState = {
  supplierShipmentsList: [],
};
