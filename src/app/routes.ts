import { Routes } from "@angular/router";


export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule)
  }
]
