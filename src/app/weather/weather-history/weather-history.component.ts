import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TableItem, TableModel } from 'carbon-components-angular';
import { ConfigService } from '../../services/config.service';
import { Observable } from 'rxjs';
import * as weather from '../../store/weather-store/weather.selectors';
import { Store} from '@ngrx/store';
import {
  getWeatherHistoryAction,
} from '../../store/weather-store/weather.actions';
import * as admin from "../../store/admin-store/admin.selectors";

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

  constructor(
    private readonly store$: Store,
    public configService: ConfigService
  ) {}

  model = new TableModel();
  currentCity$: Observable<string> = this.store$.select(admin.getCurrentCity);
  weatherHistory$: Observable<any> = this.store$.select(weather.getWeatherHistory);

  ngOnInit() {
    this.getWeatherHistory();
  }

  getCity(): any {
    let city: any;
    this.currentCity$.pipe().subscribe(data => city = data);
    return city;
  }

  getWeatherHistory() {
    // this.configService.sbj.subscribe((city) => {
      // this.store$.dispatch(changeCityAction({ city }));
      this.store$.dispatch(getWeatherHistoryAction({ city:  this.getCity()}));
      this.weatherHistory$.subscribe((weather) => {
        this.model.data = [
          [
            new TableItem({
              data: weather[0].date,
              template: this.dateTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[0].day_temperature,
                description: weather[0].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[0].night_temperature,
                description: weather[0].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({
              data: weather[1].date,
              template: this.dateTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[1].day_temperature,
                description: weather[1].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[1].night_temperature,
                description: weather[1].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({
              data: weather[2].date,
              template: this.dateTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[2].day_temperature,
                description: weather[2].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[2].night_temperature,
                description: weather[2].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({
              data: weather[3].date,
              template: this.dateTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[3].day_temperature,
                description: weather[3].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[3].night_temperature,
                description: weather[3].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({
              data: weather[4].date,
              template: this.dateTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[4].day_temperature,
                description: weather[4].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[4].night_temperature,
                description: weather[4].description,
              },
              template: this.iconTemplate,
            }),
          ],
          [
            new TableItem({
              data: weather[5].date,
              template: this.dateTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[5].day_temperature,
                description: weather[5].description,
              },
              template: this.iconTemplate,
            }),
            new TableItem({
              data: {
                temperature: weather[5].night_temperature,
                description: weather[5].description,
              },
              template: this.iconTemplate,
            }),
          ],
        ];
      });
    // });
  }
}
