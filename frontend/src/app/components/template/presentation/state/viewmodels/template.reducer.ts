/*mport { createReducer, on } from '@ngrx/store';
import { initialLoginState } from './template.state';
import { setUserRole } from './template.actions';

export const loginReducer = createReducer(
  initialLoginState,

  on(setUserRole, (state, { userRole }) => ({
    ...state,
    userRole: userRole,
  })),
);*/
