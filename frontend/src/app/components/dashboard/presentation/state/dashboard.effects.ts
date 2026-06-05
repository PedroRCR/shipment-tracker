import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { getSupplierShipments, getSupplierShipmentsFail, getSupplierShipmentsSuccess } from './dashboard.actions';
import { getSupplierShipmentsUseCase } from '../../domain/usecases/getSupplierShipmentsUseCase';

@Injectable()
export class DashboardEffects {
  private actions$ = inject(Actions);                                    
  private getSupplierShipmentsUseCase = inject(getSupplierShipmentsUseCase);
  
  getSupplierShipments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSupplierShipments),
      switchMap(({ supplierId }) =>
        this.getSupplierShipmentsUseCase.execute(supplierId).pipe(
          map((shipments) => getSupplierShipmentsSuccess({ shipments })),
          catchError((error) =>
            of(getSupplierShipmentsFail({ error: error.message })),
          ),
        ),
      ),
    ),
  );

  /*loadStats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStats),
      switchMap(() =>
        this.getStatsUseCase.execute().pipe(
          map((stats) => loadStatsSuccess({ stats })),
          catchError((err) =>
            of(loadStatsFailure({ error: err.message ?? 'Unknown error' }))
          )
        )
      )
    )
  );*/
}
