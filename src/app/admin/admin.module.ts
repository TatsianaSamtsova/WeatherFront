import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  ModalModule,
  DialogModule,
  DropdownModule,
  InputModule,
  LoadingModule,
  PlaceholderModule,
  TableModule, IconModule, ButtonModule,
} from 'carbon-components-angular';

import { adminRoutes } from './admin.routes';
import { ConfigComponent } from './config.component';

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
    IconModule,
    ButtonModule,
  ],
  declarations: [ConfigComponent],
  providers: [],
})
export class AdminModule {}
