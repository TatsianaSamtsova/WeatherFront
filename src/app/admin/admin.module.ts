import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import {
  ModalModule,
  DialogModule,
  DropdownModule,
  InputModule,
  LoadingModule,
  PlaceholderModule,
  TableModule
} from "carbon-components-angular";

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
    ModalModule,
    DropdownModule,
    LoadingModule,
    DialogModule,
    PlaceholderModule,

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
