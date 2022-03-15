import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../services/weather.service";
import {IWeather} from "../shared/weather.modal";


@Component({
  selector: 'current-weather',
  templateUrl: "./current-weather.component.html",
  styleUrls: ['./current-weather.component.scss']
})

export class CurrentWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  currentDateTime: Date | undefined
  currentCity: string = 'Minsk'
  weather: IWeather | undefined
  description: string = ''


  ngOnInit() {
    this.currentDateTime = new Date()
    this.getCurrentWeather()
    this.showThunderstormIcon()
    this.showRainIcon()
    this.showRainScatteredIcon()
    this.showRainAndSnowIcon()
    this.showSnowIcon()
    this.showFogIcon()
    this.showSunnyIcon()
    this.showCloudIcon()
    this.showCloudyIcon()
    this.showPartlyCloudyIcon()
  }

  getCurrentWeather() {
    this.weatherService.getCityWeather(this.currentCity).subscribe((weather) => {
      this.weather = weather.data[0]
      this.description = weather.data[0].description
      console.log(weather)
    });
  }

  showThunderstormIcon(){
    switch (this.description) {
      case "thunderstorm with light rain":
       return "thunderstorm with light rain"
      case "thunderstorm with rain":
        return "thunderstorm with rain"
      case "thunderstorm with heavy rain":
       return "thunderstorm with heavy rain"
      case "light thunderstorm":
        return "light thunderstorm"
      case "thunderstorm":
       return "thunderstorm"
      case "heavy thunderstorm":
        return "heavy thunderstorm"
      case "ragged thunderstorm":
       return "ragged thunderstorm"
      case "thunderstorm with light drizzle":
        return "thunderstorm with light drizzle"
      case "thunderstorm with drizzle":
       return "thunderstorm with drizzle"
      case "thunderstorm with heavy drizzle":
        return "thunderstorm with heavy drizzle"
    }
    return
  }

  showRainIcon(){
    switch (this.description) {
      case "light intensity drizzle":
       return "light intensity drizzle"
      case "drizzle":
        return "drizzle"
      case "heavy intensity drizzle":
       return "heavy intensity drizzle"
      case "light intensity drizzle rain":
        return "light intensity drizzle rain"
      case "drizzle rain":
       return "drizzle rain"
      case "heavy intensity drizzle rain":
        return "heavy intensity drizzle rain"
      case "shower rain and drizzle":
       return "shower rain and drizzle"
      case "heavy shower rain and drizzle":
        return "heavy shower rain and drizzle"
      case "shower drizzle":
       return "shower drizzle"
      case "light intensity shower rain":
        return "light intensity shower rain"
      case "shower rain":
        return "shower rain"
      case "heavy intensity shower rain":
       return "heavy intensity shower rain"
      case "ragged shower rain":
        return "ragged shower rain"
    }
    return
  }

  showRainScatteredIcon(){
    switch (this.description) {
      case "light rain":
       return "light rain"
      case "moderate rain":
        return "moderate rain"
      case "heavy intensity rain":
       return "heavy intensity rain"
      case "very heavy rain":
        return "very heavy rain"
      case "extreme rain":
       return "extreme rain"
    }
    return
  }

  showRainAndSnowIcon(){
      switch (this.description) {
        case "freezing rain":
         return "freezing rain"
        case "Rain and snow":
         return "Rain and snow"
        case "Light rain and snow":
         return "Light rain and snow"
      }
      return
    }

  showSnowIcon(){
    switch (this.description) {
      case "light snow":
        return "light snow"
      case "Snow":
        return "Snow"
      case "Heavy snow":
        return "Heavy snow"
      case "Sleet":
        return "Sleet"
      case "Light shower sleet":
        return "Light shower sleet"
      case "Shower sleet":
        return "Shower sleet"
      case "Light shower snow":
        return "Light shower snow"
      case "Shower snow":
        return "Shower snow"
      case "Heavy shower snow":
        return "Heavy shower snow"
    }
    return
  }

  showFogIcon(){
    switch (this.description) {
      case "mist":
        return "mist"
      case "Smoke":
        return "Smoke"
      case "Haze":
        return "Haze"
      case "sand/ dust whirls":
        return "sand/ dust whirls"
      case "fog":
        return "fog"
      case "sand":
        return "sand"
      case "dust":
        return "dust"
      case "volcanic ash":
        return "volcanic ash"
      case "squalls":
        return "squalls"
      case "tornado":
        return "tornado"
    }
    return
  }

  showSunnyIcon(){
    switch (this.description) {
      case "clear sky":
        return "clear sky"
    }
    return
  }

  showCloudIcon(){
    switch (this.description) {
      case "scattered clouds":
        return "scattered clouds"
    }
    return
  }

  showCloudyIcon(){
    switch (this.description) {
      case "broken clouds":
        return "broken clouds"
      case "overcast clouds":
        return "overcast clouds"
    }
    return
  }

  showPartlyCloudyIcon(){
    switch (this.description) {
      case "few clouds":
        return "few clouds"
    }
    return
  }
}
