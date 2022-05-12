import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor(private http: HttpClient) {}

  rootURL = '/api';
  currentCity: string = 'Minsk';

  getCities(): Observable<any> {
    return this.http.get<any>(this.rootURL + `/configs`);
  }

  addNewCity(data: any): Observable<any> {
    return this.http.post<any>(this.rootURL + `/configs/post`, data);
  }

  deleteCity(id:number): Observable<any> {
    return this.http.delete<any>(this.rootURL + `/configs/delete/${id}`);
  }

  updateCurrentCity(city: any) {
    this.currentCity = city;
  }
}
