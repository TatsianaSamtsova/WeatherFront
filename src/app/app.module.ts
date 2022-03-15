import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import {HeaderModule, TilesModule, IconModule} from "carbon-components-angular"
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
  SunriseModule, SunsetModule, ThunderstormModule
} from '@carbon/icons-angular'

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component'
import {CurrentWeatherComponent} from './current-weather/current-weather.component'
import {appRoutes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HeaderModule,
    TilesModule,
    IconModule,
    HttpClientModule,
    ThunderstormModule,
    CloudModule,
    CloudyModule,
    FogModule,
    SunModule,
    RainModule,
    SleetModule,
    SunriseModule,
    SunsetModule,
    SnowModule,
    SnowflakeModule,
    RainScatteredModule,
    PartlyCloudyModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
