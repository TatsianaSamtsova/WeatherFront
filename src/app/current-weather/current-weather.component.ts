import { Component, OnInit } from '@angular/core';
import { IWeather } from '../shared/weather.modal';
import { IconService } from '../services/icon.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private iconService: IconService
  ) {}

  currentDateTime: Date | undefined;
  currentCity: string = 'Minsk';
  weather: IWeather | undefined;
  description: string = '';

  ngOnInit() {
    this.currentDateTime = new Date();
    this.getCurrentWeather();
    this.getIcon();
  }

  getCurrentWeather() {
    this.weatherService
      .getCityWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data[0];
        this.description = weather.data[0].description;
        // console.log(weather);
      });
  }

  getIcon(){
    return this.iconService.showIcon(this.description)
  }

}
