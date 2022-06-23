import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, EMPTY, map, of, switchMap} from 'rxjs';
import { ConfigService } from '../../services/config.service';
import {
  addConfigAction, deleteConfigAction,
  getConfigAction,
  getConfigActionSuccess, updateConfigAction,
} from './admin.action';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private configService: ConfigService
  ) {}

  loadConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getConfigAction),
      switchMap(() =>
        this.configService.getCities().pipe(
          map((config) => getConfigActionSuccess({ config: config.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addConfigAction),
      switchMap((action) =>
        this.configService
          .addNewCity(action)
          .pipe(switchMap(res=> of(
            getConfigAction()
          )))
      )
    )
  );

  updateConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateConfigAction),
      switchMap((action) =>
        this.configService
          .updateConfig(action.id,action.data)
          .pipe(switchMap(res=> of(
            getConfigAction()
          )))
      )
    )
  );

  deleteConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteConfigAction),
      switchMap((action) =>
        this.configService
          .deleteCity(action.id)
          .pipe( switchMap(res=> of(
            getConfigAction()
          )))
      )
    )
  );
}
