import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { adminReducer } from './admin.reducer';
import { ADMIN_FEATURE_NAME } from './admin.state';
import {EffectsModule} from "@ngrx/effects";
import {AdminEffects} from "./admin.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ADMIN_FEATURE_NAME, adminReducer),
    EffectsModule.forFeature([AdminEffects])
  ],
})
export class AdminStoreModule {}
