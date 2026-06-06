import { Observable } from 'rxjs';
import { IDashboardRepository } from '../repositories/IDashboardRepository';
import { Shipment } from '../../../shipment/domain/entities/shipment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class getSupplierShipmentsUseCase {
  constructor(private dashboardRepository: IDashboardRepository) {}

  execute(supplierId: number): Observable<Shipment[]> {
    return this.dashboardRepository.getShipmentsBySupplierId(supplierId);
  }
}
