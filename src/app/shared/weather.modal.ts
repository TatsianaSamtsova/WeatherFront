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
}
