import { Component } from '@angular/core';
import { DashboardState, RoleType } from './state/dashboard.state';
import {
  selectDashboardState,
  userRoleSelector,
} from './state/dashboard.selectors';
import { Store } from '@ngrx/store';
import { dashboardReducer } from './state/dashboard.reducer';
import { setUserRole } from './state/dashboard.actions';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected readonly RoleType = RoleType;
  currentRole$: Observable<RoleType | undefined>;

  constructor(private dashboardStore: Store<DashboardState>) {
    this.currentRole$ = this.dashboardStore.select(userRoleSelector);
  }

  changeUserRole(userRole: RoleType) {
    this.dashboardStore.dispatch(setUserRole({ userRole }));
  }
}
