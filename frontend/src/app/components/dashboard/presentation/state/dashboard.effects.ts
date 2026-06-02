import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
//import { GetStatsUseCase } from '../../../application/use-cases/get-stats.use-case';
import {
} from './dashboard.actions';

@Injectable()
export class DashboardEffects {
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

  constructor(
    private readonly actions$: Actions,
    //private readonly getStatsUseCase: GetStatsUseCase
  ) {}
}