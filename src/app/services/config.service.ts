import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  rootURL = '/api/configs/';
  currentCity = 'Brest';
  sbj = new BehaviorSubject<string>(this.currentCity);


  getCities(): Observable<any> {
    return this.http.get<any>(this.rootURL );
  }

  addNewCity(data: any): Observable<any> {
    return this.http.post<any>(this.rootURL , data);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete<any>(this.rootURL + id);
  }

  updateConfig(id: number, data: any): Observable<any> {
    return this.http.put<any>(this.rootURL + id, data);
  }

  updateCurrentCity(city: any) {
    this.sbj.next(city);

  }
}
