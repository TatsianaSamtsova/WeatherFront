import {IWeather, IWeatherHistory} from '../../shared/weather.modal';

export const WEATHER_FEATURE_NAME = 'weather';

export interface IWeatherState {
  currentWeather?: IWeather[]
  weather?: IWeather[]
  weatherHistory?: IWeatherHistory[]
  currentCity: string;
  currentDateTime: number;
}

export const initialWeatherState: IWeatherState = {
  currentCity: 'Minsk',
  currentDateTime: 0,
};
