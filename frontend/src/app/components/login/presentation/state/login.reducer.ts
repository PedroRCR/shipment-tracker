import { createReducer, on } from '@ngrx/store';
import { initialLoginState } from './login.state';
import { setUserRole } from './login.actions';

export const loginReducer = createReducer(
  initialLoginState,

  on(setUserRole, (state, { userRole }) => ({
    ...state,
    userRole: userRole,
  })),
);
