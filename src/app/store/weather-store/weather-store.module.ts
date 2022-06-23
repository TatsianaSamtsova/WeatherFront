import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { weatherReducer } from './weather.reducer';
import { WEATHER_FEATURE_NAME } from './weather.state';
import {EffectsModule} from "@ngrx/effects";
import {WeatherEffects} from "./weather.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(WEATHER_FEATURE_NAME, weatherReducer),
    EffectsModule.forFeature([WeatherEffects]),
  ],
})
export class WeatherStoreModule {}
