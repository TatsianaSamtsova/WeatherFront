import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherHistoryComponent } from './weather-history/weather-history.component';
import {
  CloudModule,
  CloudyModule,
  FogModule,
  PartlyCloudyModule,
  RainModule,
  RainScatteredModule,
  SleetModule,
  SnowflakeModule,
  SnowModule,
  SunModule,
  SunriseModule,
  SunsetModule,
  ThunderstormModule,
} from '@carbon/icons-angular';
import {
  IconModule,
  TableModule,
  TilesModule,
} from 'carbon-components-angular';
import { WeatherComponent } from './weather.component';
import { weatherRoutes } from './weather.routes';
import { RouterModule } from '@angular/router';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import {IconComponent} from "./icon.component";

@NgModule({
  imports: [
    CommonModule,
    FogModule,
    SunModule,
    IconModule,
    RainModule,
    SnowModule,
    CloudModule,
    TilesModule,
    SleetModule,
    TableModule,
    CloudyModule,
    SunsetModule,
    SunriseModule,
    SnowflakeModule,
    PartlyCloudyModule,
    ThunderstormModule,
    RainScatteredModule,
    RouterModule.forChild(weatherRoutes),
  ],
  declarations: [
    IconComponent,
    WeatherComponent,
    WeatherInfoComponent,
    WeatherChartComponent,
    CurrentWeatherComponent,
    WeatherHistoryComponent,
  ],
  providers: [],
})
export class WeatherModule {}
