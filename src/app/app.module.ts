import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import {HeaderModule, TilesModule} from "carbon-components-angular"

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
