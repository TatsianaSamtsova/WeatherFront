import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { IWeather } from '../../shared/weather.modal';
import { TableItem, TableModel } from 'carbon-components-angular';

@Component({
  selector: 'weather-history',
  templateUrl: './weather-history.component.html',
  styleUrls: ['./weather-history.component.scss'],
})
export class WeatherHistoryComponent implements OnInit {
  @ViewChild('iconTemplate', { static: false })
  protected iconTemplate: TemplateRef<any> | undefined;
  @ViewChild('dateTemplate', { static: false })
  protected dateTemplate: TemplateRef<any> | undefined;

  constructor(private weatherService: WeatherService) {}

  currentCity: string = 'Minsk';
  model = new TableModel();
  weather: IWeather[] | undefined;
  description: string = '';

  ngOnInit() {
    this.getWeatherHistory();
  }

  getWeatherHistory() {
    this.weatherService
      .getHistoryWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data;
        this.model.data = [
          [
            new TableItem({ data: weather.data[0].date, template: this.dateTemplate }),
            new TableItem({
              data: {
                temperature: weather.data[0].day_temperature,
                description: weather.data[0].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[0].night_temperature,
                description: weather.data[0].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({ data: weather.data[1].date, template: this.dateTemplate }),
            new TableItem({
              data: {
                temperature: weather.data[1].day_temperature,
                description: weather.data[1].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[1].night_temperature,
                description: weather.data[1].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({ data: weather.data[2].date, template: this.dateTemplate }),
            new TableItem({
              data: {
                temperature: weather.data[2].day_temperature,
                description: weather.data[2].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[2].night_temperature,
                description: weather.data[2].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({ data: weather.data[3].date, template: this.dateTemplate }),
            new TableItem({
              data: {
                temperature: weather.data[3].day_temperature,
                description: weather.data[3].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[3].night_temperature,
                description: weather.data[3].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({ data: weather.data[4].date, template: this.dateTemplate }),
            new TableItem({
              data: {
                temperature: weather.data[4].day_temperature,
                description: weather.data[4].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[4].night_temperature,
                description: weather.data[4].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({ data: weather.data[5].date, template: this.dateTemplate }),
            new TableItem({
              data: {
                temperature: weather.data[5].day_temperature,
                description: weather.data[5].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[5].night_temperature,
                description: weather.data[5].description,
              },
              template: this.iconTemplate,
            }),
          ]
        ];
        console.log(this.weather);
      });
  }
}
