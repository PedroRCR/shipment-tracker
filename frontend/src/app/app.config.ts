import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { loginReducer } from './components/login/presentation/state/login.reducer';
import { LoginEffects } from './components/login/presentation/state/login.effects';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideStore({ login: loginReducer }),
    provideEffects([LoginEffects]),
  ],
};
