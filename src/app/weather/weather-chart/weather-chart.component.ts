import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IWeather } from '../../shared/weather.modal';
import { WeatherService } from '../../services/weather.service';
import { TableItem, TableModel } from 'carbon-components-angular';
import {CityService} from "../../services/city.service";

@Component({
  selector: 'weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss'],
})
export class WeatherChartComponent implements OnInit {
  @ViewChild('iconTemplate', { static: false })
  protected iconTemplate: TemplateRef<any> | undefined;

  constructor(private weatherService: WeatherService, public cityService: CityService) {}

  currentCity = this.cityService.currentCity
  model = new TableModel();
  weather: IWeather[] | undefined;
  description: string = '';

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    this.weatherService
      .getCityWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data;
        this.model.data = [
          [
            new TableItem({
              data: {
                time: weather.data[5].date,
                description: weather.data[5].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather.data[4].date,
                description: weather.data[4].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather.data[3].date,
                description: weather.data[3].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather.data[2].date,
                description: weather.data[2].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather.data[1].date,
                description: weather.data[1].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather.data[0].date,
                description: weather.data[0].description,
              },
              template: this.iconTemplate,
            }),
          ],
        ];
      });
  }

}
