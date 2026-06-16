import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { setCurrentShipment } from './shipment.actions';
import { switchMap } from 'rxjs';
/*
@Injectable()
export class ShipmentEffects {
  setCurrentShipment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCurrentShipment),
      switchMap(({ shipmentId }) =>
        this.getShipmentUseCase.execute(shipmentId).pipe(
          map((shipment) => setCurrentShipmentSuccess({ shipment })),
          catchError((err) =>
            of(loadStatsFailure({ error: err.message ?? 'Unknown error' }))
          )
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    //private readonly getStatsUseCase: GetStatsUseCase
  ) {}
}*/
