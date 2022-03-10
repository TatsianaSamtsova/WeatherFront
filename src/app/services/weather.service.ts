import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getCityWeather(city:string) {
    return this.http.get(this.rootURL + `/weather/${city}`);
  }

}
