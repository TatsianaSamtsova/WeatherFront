import { Component, HostListener, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import * as weather from '../../store/weather-store/weather.selectors';
import * as admin from '../../store/admin-store/admin.selectors';
import {
  getCurrentWeatherAction
} from '../../store/weather-store/weather.actions';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  currentCity$: Observable<string> = this.store$.select(admin.getCurrentCity);
  weather$: Observable<any> = this.store$.select(weather.getCurrentWeather);
  currentDateTime$: Observable<any> = this.store$.select(weather.getCurrentDateTime)
  width: any;

  constructor(
    private store$: Store,
    public configService: ConfigService
  ) {}

  ngOnInit() {
    this.getCurrentWeather();
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = event.target.innerWidth;
  }

  getCity(): any {
    let city: any;
    this.currentCity$.pipe().subscribe(data => city = data);
    return city;
  }

  getCurrentWeather() {
    // this.configService.sbj.subscribe((city) => {
    //   this.store$.dispatch(changeCityAction({ city }));
    //   this.store$.dispatch(getCurrentWeatherAction({ city }));
    // });
    this.store$.dispatch(getCurrentWeatherAction({ city: this.getCity() }));
  }

  size() {
    if (this.width < 768) {
      return '190';
    }
    if (this.width < 1024) {
      return '240';
    } else {
      return '335';
    }
  }
}
