import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shipment',
  imports: [],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css',
})
export class ShipmentComponent implements OnInit {
  shipmentId: number = -1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.shipmentId = Number(this.route.snapshot.paramMap.get('shipmentId'));
  }
}
