import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CityService {

  constructor(private http: HttpClient) {}

  rootURL = '/api';
  currentCity: string = 'Minsk'

  getCities(): Observable<any> {
    return this.http.get<any>(this.rootURL + `/configs`);
  }

  updateCurrentCity(city: any) {
    this.currentCity = city
  }
}
