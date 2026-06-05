import { createAction, props } from '@ngrx/store';
import { RoleType } from './login.state';

export enum LoginTypes {
  setUserRole = '[Login] Set userRole',
}

export const setUserRole = createAction(
  LoginTypes.setUserRole,
  props<{ userRole: RoleType }>()
);
