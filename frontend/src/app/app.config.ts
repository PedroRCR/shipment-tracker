import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { loginReducer } from './components/login/presentation/state/login.reducer';
import { LoginEffects } from './components/login/presentation/state/login.effects';

import { routes } from './app.routes';
import { dashboardReducer } from './components/dashboard/presentation/state/dashboard.reducer';
import { DashboardEffects } from './components/dashboard/presentation/state/dashboard.effects';
import { IDashboardRepository } from './components/dashboard/domain/repositories/IDashboardRepository';
import { DashboardRepository } from './components/dashboard/data/repositories/dashboardRepository';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({ login: loginReducer, dashboard: dashboardReducer }),
    provideEffects([LoginEffects, DashboardEffects]),
    provideHttpClient(),
    {
      provide: IDashboardRepository,
      useClass: DashboardRepository,
    },
  ],
};

