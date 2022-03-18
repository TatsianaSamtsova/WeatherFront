import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <app-header></app-header>
    <current-weather></current-weather>
    <weather-history></weather-history>
    <router-outlet></router-outlet>`,
})
export class AppComponent {}
