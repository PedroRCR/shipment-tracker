import { Shipment } from '../../../shipment/domain/entities/shipment';

export interface DashboardState {
  supplierShipmentsList: Shipment[];
}

export const initialDashboardState: DashboardState = {
  supplierShipmentsList: [],
};
