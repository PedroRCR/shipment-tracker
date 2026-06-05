import { Component } from '@angular/core';
import { LoginState, RoleType } from './state/login.state';
import { userRoleSelector } from './state/login.selectors';
import { Store } from '@ngrx/store';
import { setUserRole } from './state/login.actions';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [AsyncPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  protected readonly RoleType = RoleType;
  currentRole$: Observable<RoleType | undefined>;

  constructor(
    private loginStore: Store<LoginState>,
    private router: Router,
  ) {
    this.currentRole$ = this.loginStore.select(userRoleSelector);
  }

  changeUserRole(userRole: RoleType) {
    this.loginStore.dispatch(setUserRole({ userRole }));
    this.router.navigate(['/dashboard']);
  }
}
