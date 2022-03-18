import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  showIcon(description: string) {
    switch (description) {
      case 'broken clouds':
      case 'overcast clouds':
        return 'clouds';
      case 'scattered clouds':
        return 'cloudy';
      case 'few clouds':
        return 'partly cloudy';
      case 'clear sky':
        return 'sunny';
      case 'mist':
      case 'Smoke':
      case 'Haze':
      case 'sand/ dust whirls':
      case 'fog':
      case 'sand':
      case 'dust':
      case 'volcanic ash':
      case 'squalls':
      case 'tornado':
        return 'fog';
      case 'light snow':
      case 'Snow':
      case 'Heavy snow':
      case 'Sleet':
      case 'Light shower sleet':
      case 'Shower sleet':
      case 'Light shower snow':
      case 'Shower snow':
      case 'Heavy shower snow':
        return 'snow';
      case 'freezing rain':
      case 'Rain and snow':
      case 'Light rain and snow':
        return 'rain and snow';
      case 'light rain':
      case 'moderate rain':
      case 'heavy intensity rain':
      case 'very heavy rain':
      case 'extreme rain':
        return 'rain scattered';
      case 'light intensity drizzle':
      case 'drizzle':
      case 'heavy intensity drizzle':
      case 'light intensity drizzle rain':
      case 'drizzle rain':
      case 'heavy intensity drizzle rain':
      case 'shower rain and drizzle':
      case 'heavy shower rain and drizzle':
      case 'shower drizzle':
      case 'light intensity shower rain':
      case 'shower rain':
      case 'heavy intensity shower rain':
      case 'ragged shower rain':
        return 'rain';
      case 'thunderstorm with light rain':
      case 'thunderstorm with rain':
      case 'thunderstorm with heavy rain':
      case 'light thunderstorm':
      case 'thunderstorm':
      case 'heavy thunderstorm':
      case 'ragged thunderstorm':
      case 'thunderstorm with light drizzle':
      case 'thunderstorm with drizzle':
      case 'thunderstorm with heavy drizzle':
        return 'thunderstorm';
    }
    return;
  }
}
