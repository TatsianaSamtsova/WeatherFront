import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  {
    path: 'weather',
    loadChildren: () =>
      import('./weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
