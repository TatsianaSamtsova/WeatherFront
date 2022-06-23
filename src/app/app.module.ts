import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {DropdownModule, HeaderModule, ModalModule} from 'carbon-components-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { appRoutes } from './routes';
import {WeatherService} from "./services/weather.service";
import {ConfigService} from "./services/config.service";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {WeatherStoreModule} from "./store/weather-store/weather-store.module";
import {AdminStoreModule} from "./store/admin-store/admin-store.module";
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    HeaderModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule,
    DropdownModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    WeatherStoreModule,
    AdminStoreModule,
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [WeatherService, ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
