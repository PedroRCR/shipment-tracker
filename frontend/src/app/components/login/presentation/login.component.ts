import { Component } from '@angular/core';
import { LoginState, RoleType } from './state/login.state';
import {
  selectLoginState,
  userRoleSelector,
} from './state/login.selectors';
import { Store } from '@ngrx/store';
import { loginReducer } from './state/login.reducer';
import { setUserRole } from './state/login.actions';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly RoleType = RoleType;
  currentRole$: Observable<RoleType | undefined>;

  constructor(private loginStore: Store<LoginState>) {
    this.currentRole$ = this.loginStore.select(userRoleSelector);
  }

  changeUserRole(userRole: RoleType) {
    this.loginStore.dispatch(setUserRole({ userRole }));
  }
}
