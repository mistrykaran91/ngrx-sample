import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';
import { MaterialModule } from '../app/material.module';
import { EffectsModule } from '@ngrx/effects';
import { VehicleEffects } from './store/effects/vehicle.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    StoreModule.forFeature('fitment', reducers),
    EffectsModule.forFeature([VehicleEffects])
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent]
})
export class FitmentModule {}
