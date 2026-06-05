/*import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import {} from './template.actions';

@Injectable()
export class LoginEffects {
  loadStats$ = createEffect(() =>
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
  );

  constructor(
    private readonly actions$: Actions,
    //private readonly getStatsUseCase: GetStatsUseCase
  ) {}
}*/
