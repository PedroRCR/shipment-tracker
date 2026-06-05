import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardComponent } from './presentation/dashboard.component';
import { dashboardReducer } from './presentation/state/dashboard.reducer';
import { DashboardEffects } from './presentation/state/dashboard.effects';
import { IDashboardRepository } from './domain/repositories/IDashboardRepository';
import { DashboardRepository } from './data/repositories/dashboardRepository';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [],
})
export class DashboardModule {}
