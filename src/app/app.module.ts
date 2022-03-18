import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {
  IconModule,
  TableModule,
  TilesModule,
  HeaderModule,
} from 'carbon-components-angular';
import {
  FogModule,
  SunModule,
  RainModule,
  SnowModule,
  SleetModule,
  CloudModule,
  SunsetModule,
  CloudyModule,
  SunriseModule,
  SnowflakeModule,
  ThunderstormModule,
  PartlyCloudyModule,
  RainScatteredModule,
} from '@carbon/icons-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { WeatherHistoryComponent } from './weather-history/weather-history.component';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentWeatherComponent,
    WeatherHistoryComponent,
  ],
  imports: [
    FogModule,
    SunModule,
    IconModule,
    RainModule,
    SnowModule,
    CloudModule,
    TilesModule,
    SleetModule,
    TableModule,
    HeaderModule,
    CloudyModule,
    SunsetModule,
    BrowserModule,
    SunriseModule,
    SnowflakeModule,
    HttpClientModule,
    PartlyCloudyModule,
    ThunderstormModule,
    ReactiveFormsModule,
    RainScatteredModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
