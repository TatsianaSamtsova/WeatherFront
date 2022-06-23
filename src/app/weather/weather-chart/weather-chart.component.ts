import {
  Component,
  OnChanges,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IWeather } from '../../shared/weather.modal';
import { WeatherService } from '../../services/weather.service';
import { TableItem, TableModel } from 'carbon-components-angular';
import { ConfigService } from '../../services/config.service';
import {Observable} from "rxjs";
import * as weather from "../../store/weather-store/weather.selectors";
import { Store} from "@ngrx/store";
import {getWeatherAction, getWeatherHistoryAction} from "../../store/weather-store/weather.actions";
import * as admin from "../../store/admin-store/admin.selectors";

@Component({
  selector: 'weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.scss'],
})
export class WeatherChartComponent implements OnInit {
  @ViewChild('iconTemplate', { static: false })
  protected iconTemplate: TemplateRef<any> | undefined;

  constructor(
    private readonly store$: Store,
    public configService: ConfigService
  ) {}

  model = new TableModel();
  currentCity$: Observable<string> = this.store$.select(admin.getCurrentCity);
  weather$: Observable<any> = this.store$.select(weather.getWeather);

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCity(): any {
    let city: any;
    this.currentCity$.pipe().subscribe(data => city = data);
    return city;
  }

  getCurrentWeather() {
    // this.configService.sbj.subscribe((city) => {
      // this.store$.dispatch(changeCityAction({ city }));
      this.store$.dispatch(getWeatherAction({ city: this.getCity() }));
      this.weather$.subscribe((weather) => {
        this.model.data = [
          [
            new TableItem({
              data: {
                time: weather[5].date,
                description: weather[5].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather[4].date,
                description: weather[4].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather[3].date,
                description: weather[3].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather[2].date,
                description: weather[2].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather[1].date,
                description:weather[1].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                time: weather[0].date,
                description: weather[0].description,
              },
              template: this.iconTemplate,
            }),
          ],
        ];
      })
    // })
  }

}
