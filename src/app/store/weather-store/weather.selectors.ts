import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IWeatherState, WEATHER_FEATURE_NAME} from "./weather.state";

const selectFeature = createFeatureSelector<IWeatherState>(WEATHER_FEATURE_NAME)

export const getCurrentCity = createSelector(
  selectFeature,
  state => state.currentCity
)

export const getCurrentWeather = createSelector(
  selectFeature,
  state => state.currentWeather
)

export const getWeather = createSelector(
  selectFeature,
  state => state.weather
)

export const getWeatherHistory = createSelector(
  selectFeature,
  state => state.weatherHistory
)

export const getCurrentDateTime = createSelector(
  selectFeature,
  state => state.currentDateTime
)
