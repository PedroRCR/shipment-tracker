import { Injectable } from '@angular/core';
import { IDashboardRepository } from '../../domain/repositories/IDashboardRepository';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Shipment } from '../../domain/entities/shipment';
import { ShipmentMapper, ShipmentModel } from '../models/shipmentModel';

@Injectable({ providedIn: 'root' })
export class DashboardRepository extends IDashboardRepository {
  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
    super();
  }

  getShipmentsBySupplierId(supplierId: number): Observable<Shipment[]> {
    return this.http
      .get<ShipmentModel[]>(`${this.baseUrl}shipments/supplier/${supplierId}`)
      .pipe(map((models) => models.map(ShipmentMapper.fromJson)));
  }
}
