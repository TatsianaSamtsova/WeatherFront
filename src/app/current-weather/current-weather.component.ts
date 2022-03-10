import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'current-weather',
  templateUrl: "./current-weather.component.html",
  styleUrls: ['./current-weather.component.scss']
})


export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  currentDateTime: Date | undefined
  currentCity: string = 'Minsk'

  ngOnInit() {
    this.currentDateTime = new Date()
  }

  getCityWeather() {
    this.weatherService.getCityWeather(this.currentCity).subscribe((data) => {
      console.log(data)
    });
  }
}
