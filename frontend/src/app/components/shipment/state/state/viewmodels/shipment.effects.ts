import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setCurrentShipment,
  setCurrentShipmentSuccess,
  setCurrentShipmentFail,
  getShipmentEvents,
  getShipmentEventsSuccess,
  getShipmentEventsFail,
} from './shipment.actions';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { supplierShipmentsListSelector } from '../../../../dashboard/presentation/state/dashboard.selectors';
import { Store } from '@ngrx/store';
import { ShipmentService } from '../../../service/shipmentService';

@Injectable()
export class ShipmentEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);
  private readonly shipmentService = inject(ShipmentService);

  setCurrentShipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentShipment),
      withLatestFrom(this.store.select(supplierShipmentsListSelector)),
      map(([{ shipmentId }, shipments]) => {
        const shipment = shipments.find((s) => s.id === shipmentId);
        if (!shipment) {
          return setCurrentShipmentFail({
            error: `Shipment ${shipmentId} not found`,
          });
        }
        return setCurrentShipmentSuccess({ shipment });
      }),
    ),
  );

  shipmentEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getShipmentEvents),
      switchMap((action) =>
        this.shipmentService.getShipmentEvents(action.shipmentId).pipe(
          map((events) =>
            getShipmentEventsSuccess({ shipmentEventsList: events }),
          ),
          catchError((err) =>
            of(getShipmentEventsFail({ error: err.message })),
          ),
        ),
      ),
    ),
  );
}
