import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../shared/weather.modal';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
  ) {}

  currentDateTime: Date | undefined;
  currentCity: string = 'Minsk';
  weather: IWeather | undefined;
  description: string = '';

  ngOnInit() {
    this.currentDateTime = new Date();
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherService
      .getCityWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data[0];
        this.description = weather.data[0].description;
      });
  }

}
