import { Component, OnInit } from '@angular/core';
import {
  LoginState,
  RoleType,
} from '../../login/presentation/state/login.state';
import { Store } from '@ngrx/store';
import { userRoleSelector } from '../../login/presentation/state/login.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Shipment } from '../../shipment/models/entities/shipment';
import { getSupplierShipments } from './state/dashboard.actions';
import { DashboardState } from './state/dashboard.state';
import { supplierShipmentsListSelector } from './state/dashboard.selectors';
import { Router } from '@angular/router';
import { ModalComponent } from '../../../modal-component/modal-component.component';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, ModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  protected readonly RoleType = RoleType;
  currentRole$!: Observable<RoleType | undefined>;
  shipmentsList$!: Observable<Shipment[]>;

  showCreateShipmentModal: boolean = false;
  showCheckShipmentModal: boolean = false;

  constructor(
    private store: Store,
    private route: Router,
  ) {}

  ngOnInit() {
    this.currentRole$ = this.store.select(userRoleSelector);
    this.store.dispatch(getSupplierShipments({ supplierId: 1 }));
    this.shipmentsList$ = this.store.select(supplierShipmentsListSelector);
  }

  openShipment(shipmentId: number) {
    this.route.navigate(['/shipment', shipmentId]);
  }

  openModal(modalType: string) {
    switch (modalType) {
      case 'Create':
        this.showCreateShipmentModal = true;
        break;
      case 'Check':
        this.showCheckShipmentModal = true;
        break;
      default:
        break;
    }
  }
}
