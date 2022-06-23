import { createReducer, on } from '@ngrx/store';
import { initialWeatherState } from './weather.state';
import {
  getCurrentDateTimeAction,
  getCurrentWeatherAction,
  getCurrentWeatherActionSuccess,
  getWeatherAction,
  getWeatherActionSuccess,
  getWeatherHistoryAction,
  getWeatherHistoryActionSuccess,
} from './weather.actions';

export const weatherReducer = createReducer(
  initialWeatherState,
  // on(
  //   getWeatherAction,
  //   getCurrentWeatherAction,
  //   getWeatherHistoryAction,
  //   (state) => ({
  //     ...state,
  //   })
  // ),
  on(getWeatherHistoryActionSuccess, (state, { weatherHistory }) => ({
    ...state,
    weatherHistory,
  })),
  on(getWeatherActionSuccess, (state, { weather }) => ({
    ...state,
    weather,
  })),
  on(getCurrentWeatherActionSuccess, (state, { currentWeather }) => ({
    ...state,
    currentWeather,
  })),
  on(getCurrentDateTimeAction, (state, action) => ({
    ...state,
    currentDateTime: action.currentDateTime,
  }))
);
