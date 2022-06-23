import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IWeather} from "../shared/weather.modal";

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  rootURL = '/api/weather/';

  getCityWeather(city: any): Observable<any> {
    return this.http.get<any>(this.rootURL + city);
  }

  getHistoryWeather(city: string): Observable<any> {
    return this.http.get<any>(this.rootURL + 'history/' + city);
  }
}
