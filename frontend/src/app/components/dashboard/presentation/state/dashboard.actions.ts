import { createAction, props } from '@ngrx/store';
import { Shipment } from '../../domain/entities/shipment';

export enum DashboardTypes {
  getSupplierShipments = '[Dashboard] get supplier shipments',
  getSupplierShipmentsSuccess = '[Dashboard] get supplier shipments success',
  getSupplierShipmentsFail = '[Dashboard] get supplier shipments fail',
}

export const getSupplierShipments = createAction(
  DashboardTypes.getSupplierShipments,
  props<{ supplierId: number }>(),
);
export const getSupplierShipmentsSuccess = createAction(
  DashboardTypes.getSupplierShipmentsSuccess,
  props<{ shipments: Shipment[] }>(),
);

export const getSupplierShipmentsFail = createAction(
  DashboardTypes.getSupplierShipmentsFail,
  props<{ error: string }>(),
);
