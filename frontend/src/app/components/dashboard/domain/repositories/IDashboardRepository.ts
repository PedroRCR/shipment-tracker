import { Observable } from "rxjs";
import { Shipment } from "../../../shipment/models/entities/shipment";

export abstract class IDashboardRepository {
  abstract getShipmentsBySupplierId(supplierId: number): Observable<Shipment[]>;
}