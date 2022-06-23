import { Injectable } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import {
  getCurrentDateTimeAction,
  getCurrentWeatherAction,
  getCurrentWeatherActionSuccess,
  getWeatherAction,
  getWeatherActionSuccess,
  getWeatherHistoryAction,
  getWeatherHistoryActionSuccess,
} from './weather.actions';
import { changeCityAction } from '../admin-store/admin.action';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadCurrentWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentWeatherAction, changeCityAction),
      switchMap((action) =>
        this.weatherService.getCityWeather(action.city).pipe(
          map((weather) =>
            getCurrentWeatherActionSuccess({
              currentWeather: weather.data.slice(0, 1),
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherAction, changeCityAction),
      switchMap((action) =>
        this.weatherService.getCityWeather(action.city).pipe(
          map((weather) => getWeatherActionSuccess({ weather: weather.data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadWeatherHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherHistoryAction, changeCityAction),
      switchMap((action) =>
        this.weatherService.getHistoryWeather(action.city).pipe(
          map((weatherHistory) =>
            getWeatherHistoryActionSuccess({
              weatherHistory: weatherHistory.data,
            })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadCurrentDateTime$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentWeatherAction, changeCityAction),
      map(() => getCurrentDateTimeAction({ currentDateTime: Date.now() }))
    )
  );
}
