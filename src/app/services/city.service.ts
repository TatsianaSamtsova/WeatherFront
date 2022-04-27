import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  currentCity: string = 'Minsk'

  updateCurrentCity(city: any) {
    this.currentCity = city
  }
}
