import { createAction, props } from '@ngrx/store';
import {IWeather, IWeatherHistory} from "../../shared/weather.modal";

export const getCurrentWeatherAction = createAction(
  '[weather] Load Current Weather',
  props<{ city: string }>()
);

export const getCurrentWeatherActionSuccess = createAction(
  '[weather] Current Weather Loaded Success',
  props<{ currentWeather: IWeather[]}>()
);

export const getWeatherAction = createAction(
  '[weather] Load Weather',
  props<{ city: string }>()
);

export const getWeatherActionSuccess = createAction(
  '[weather] Weather Loaded Success',
  props<{ weather: IWeather[]}>()
);

export const getWeatherHistoryAction = createAction(
  '[weather] Load Weather History',
  props<{ city: string }>()
);

export const getWeatherHistoryActionSuccess = createAction(
  '[weather] Weather History Loaded Success',
  props<{ weatherHistory: IWeatherHistory[]}>()
);

export const getCurrentDateTimeAction = createAction(
  '[weather] Load Current Date Time',
  props<{ currentDateTime: number }>()
);


