import { createAction, props } from '@ngrx/store';
import { RoleType } from './login.state';

export enum UserTypes {
  setUserRole = '[Login] Set userRole',
}

export const setUserRole = createAction(
  UserTypes.setUserRole,
  props<{ userRole: RoleType }>()
);
