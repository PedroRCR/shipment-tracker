import { ShipmentEvent } from './entities/shipmentEvent';

export interface ShipmentEventModel {
  id: number;
  statusName: string;
  occurredAt: string;
}

export class ShipmentEventMapper {
  static fromJson(model: ShipmentEventModel): ShipmentEvent {
    return {
      id: model.id,
      statusName: model.statusName,
      occurredAt: new Date(model.occurredAt),
    };
  }
}
