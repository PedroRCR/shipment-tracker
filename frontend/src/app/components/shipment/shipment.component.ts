import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  getShipmentEvents,
  setCurrentShipment,
} from './state/state/viewmodels/shipment.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Shipment } from './models/entities/shipment';
import {
  currentShipmentEventsSelector,
  currentShipmentSelector,
} from './state/state/viewmodels/shipment.selectors';
import { ShipmentEvent } from './models/entities/shipmentEvent';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-shipment',
  imports: [AsyncPipe, DatePipe],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css',
})
export class ShipmentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  shipmentId: number = -1;
  currentShipment$: Observable<Shipment | null> = this.store.select(
    currentShipmentSelector,
  );
  shipmentEvents$: Observable<ShipmentEvent[]> = this.store.select(
    currentShipmentEventsSelector,
  );

  ngOnInit() {
    this.shipmentId = Number(this.route.snapshot.paramMap.get('shipmentId'));
    this.store.dispatch(setCurrentShipment({ shipmentId: this.shipmentId }));
    this.store.dispatch(getShipmentEvents({ shipmentId: this.shipmentId }));
  }
}
