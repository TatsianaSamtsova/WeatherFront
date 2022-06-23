export interface IWeather {
  config_id: number;
  date: Date;
  description: string;
  humidity: number;
  id: string;
  pressure: number;
  temperature: number;
  temperature_feels_like: number;
  wind_speed: number;
  sunrise: number;
  sunset: number;
}

export  interface IWeatherHistory {
  day_temperature: number;
  night_temperature: number;
  date: Date;
  description: string
}
