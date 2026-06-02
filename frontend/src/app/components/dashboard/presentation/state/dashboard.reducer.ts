import { createReducer, on } from '@ngrx/store';
import { initialDashboardState } from './dashboard.state';
import { setUserRole } from './dashboard.actions';

export const dashboardReducer = createReducer(
  initialDashboardState,

  on(setUserRole, (state, { userRole }) => ({
    ...state,
    userRole: userRole,
  })),
);
