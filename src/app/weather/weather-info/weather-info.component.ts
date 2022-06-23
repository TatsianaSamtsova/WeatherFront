import { Component, OnChanges, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import {Observable} from "rxjs";
import * as weather from "../../store/weather-store/weather.selectors";
import {Store} from "@ngrx/store";
import { getCurrentWeatherAction} from "../../store/weather-store/weather.actions";
import * as admin from "../../store/admin-store/admin.selectors";

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  constructor(
    private readonly store$: Store,
    public configService: ConfigService
  ) {}

  currentCity$: Observable<string> = this.store$.select(admin.getCurrentCity);
  weather$: Observable<any> = this.store$.select(
    weather.getCurrentWeather
  );

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCity(): any {
    let city: any;
    this.currentCity$.pipe().subscribe(data => city = data);
    return city;
  }

  getCurrentWeather() {
    // this.configService.sbj.subscribe((city) => {
      // this.store$.dispatch(changeCityAction({city}))
      this.store$.dispatch(getCurrentWeatherAction({ city:  this.getCity()}))
      // this.currentCity = city;
      // this.weatherService
      //   .getCityWeather(this.currentCity)
      //   .subscribe((weather) => {
      //     this.weather = weather.data[0];
      //   });
    // });
  }
}
