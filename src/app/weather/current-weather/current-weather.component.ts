import {Component, HostListener, OnInit} from '@angular/core';
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
  width: any

  ngOnInit() {
    this.currentDateTime = new Date();
    this.getCurrentWeather();
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }

  getCurrentWeather() {
    this.weatherService
      .getCityWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data[0];
        this.description = weather.data[0].description;
      });
  }

  size(){
    if(this.width < 768){
      return '190'
    }
    if(this.width < 1024){
      return '240'
    }
    else {
      return '335'
    }
  }

}
