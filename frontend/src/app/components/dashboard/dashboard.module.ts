import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './presentation/dashboard.component';
import { dashboardReducer } from './presentation/state/dashboard.reducer';
import { DashboardEffects } from './presentation/state/dashboard.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects]),
  ],
  providers: [
    //GetStatsUseCase,
    //{ provide: StatsRepository, useClass: HttpStatsRepository },
  ],
})
export class DashboardModule {}