import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import {DropdownModule, InputModule, LoadingModule, TableModule} from "carbon-components-angular";

import { adminRoutes } from "./admin.routes";
import { CityComponent } from "./city.component"
import { ConfigComponent } from "./config.component"


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    RouterModule.forChild(adminRoutes),
    InputModule,
    DropdownModule,
    LoadingModule,

  ],
  declarations: [
    CityComponent,
    ConfigComponent
  ],
  providers: [

  ]
})

export class AdminModule {

}
