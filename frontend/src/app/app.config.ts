import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { dashboardReducer } from './components/dashboard/presentation/state/dashboard.reducer';
import { DashboardEffects } from './components/dashboard/presentation/state/dashboard.effects';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ dashboard: dashboardReducer }),
    provideEffects([DashboardEffects]),
  ],
};
