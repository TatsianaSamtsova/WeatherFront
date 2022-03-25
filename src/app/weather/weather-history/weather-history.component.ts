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
      .getCityWeather(this.currentCity)
      .subscribe((weather) => {
        this.weather = weather.data;
        this.model.data = [
          [
            new TableItem({ data: weather.data[0].date }),
            new TableItem({
              data: {
                temperature: weather.data[0].temperature,
                description: weather.data[0].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather.data[0].temperature,
                description: weather.data[0].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [new TableItem({ data: 'asdf' }), new TableItem({ data: 'qwer' })],
          [new TableItem({ data: 'asdf' }), new TableItem({ data: 'qwer' })],
          [new TableItem({ data: 'asdf' }), new TableItem({ data: 'qwer' })],
          [new TableItem({ data: 'asdf' }), new TableItem({ data: 'qwer' })],
          [new TableItem({ data: 'asdf' }), new TableItem({ data: 'qwer' })],
        ];
        console.log(this.weather);
      });
  }
}
