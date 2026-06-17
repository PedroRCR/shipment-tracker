// ✅ string enum — explicit, API-friendly, no numeric surprises
export enum ShipmentStatus {
  CREATED = 'CREATED',
  PICKED_UP = 'PICKED_UP',
  IN_TRANSIT = 'IN_TRANSIT',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  DELIVERED = 'DELIVERED',
  FAILED = 'FAILED',
}

export interface Shipment {
  id: number;
  trackingNumber: string;
  origin: string;
  destination: string;
  weight: number;
  shipmentStatus: ShipmentStatus;
  supplierId: number;
  shipmentEvents: number[];
  createdAt: Date;
  updatedAt: Date;
}
