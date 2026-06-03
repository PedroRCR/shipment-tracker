import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './presentation/login.component';
import { loginReducer } from './presentation/state/login.reducer';
import { LoginEffects } from './presentation/state/login.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  providers: [
    //GetStatsUseCase,
    //{ provide: StatsRepository, useClass: HttpStatsRepository },
  ],
})
export class LoginModule {}