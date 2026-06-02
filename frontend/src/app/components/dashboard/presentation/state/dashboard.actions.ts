import { createAction, props } from '@ngrx/store';
import { RoleType } from './dashboard.state';

export enum DashboardTypes {
  setUserRole = '[Dashboard] Set userRole',
}

export const setUserRole = createAction(
  DashboardTypes.setUserRole,
  props<{ userRole: RoleType }>()
);
