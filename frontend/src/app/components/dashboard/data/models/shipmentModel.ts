import { Shipment, ShipmentStatus } from '../../domain/entities/shipment';

export interface ShipmentModel {
  id: number;
  supplierId: number;
  weight: number;
  trackingNumber: string;
  currentStatus: string;
  origin: string;
  destination: string;
  createdAt: string;
  updatedAt: string;
}

export class ShipmentMapper {
  static fromJson(model: ShipmentModel): Shipment {
    return {
      id: model.id,
      trackingNumber: model.trackingNumber,
      supplierId: model.supplierId,
      weight: model.weight,
      shipmentStatus: model.currentStatus as ShipmentStatus,
      origin: model.origin,
      destination: model.destination,
      createdAt: new Date(model.createdAt),
      updatedAt: new Date(model.updatedAt),
      shipmentEvents: [],
    };
  }

  static toJson(shipment: Shipment): ShipmentModel {
    return {
      id: shipment.id,
      trackingNumber: shipment.trackingNumber,
      weight: shipment.weight,
      supplierId: shipment.supplierId,
      currentStatus: shipment.shipmentStatus,
      origin: shipment.origin,
      destination: shipment.destination,
      createdAt: shipment.createdAt.toISOString(),
      updatedAt: shipment.updatedAt.toISOString(),
    };
  }
}
