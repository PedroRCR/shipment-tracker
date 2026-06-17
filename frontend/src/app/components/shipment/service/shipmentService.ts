// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipmentEvent } from '../models/entities/shipmentEvent';
import {
  ShipmentEventMapper,
  ShipmentEventModel,
} from '../models/shipmentEventModel';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getShipmentEvents(shipmentId: number): Observable<ShipmentEvent[]> {
    return this.http
      .get<ShipmentEventModel[]>(`http://localhost:8080/shipment/${shipmentId}/events`)
      .pipe(map((models) => models.map(ShipmentEventMapper.fromJson)));
  }
}
