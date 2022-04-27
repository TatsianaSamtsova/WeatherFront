import { Component, OnInit } from '@angular/core';
import { IWeather } from '../../shared/weather.modal';
import { WeatherService } from '../../services/weather.service';
import {CityService} from "../../services/city.service";

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    public cityService: CityService
  ) {}

  currentCity = this.cityService.currentCity;
  weather: IWeather | undefined;

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherService
      .getCityWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data[0];
      });
  }
}
