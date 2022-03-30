import { Component } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <div class="wrapper">
        <current-weather></current-weather>
        <weather-history></weather-history>
      </div>
      <div class="wrapper">
        <weather-chart></weather-chart>
        <weather-info></weather-info>
      </div>
    </div>
  `,
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent {}
