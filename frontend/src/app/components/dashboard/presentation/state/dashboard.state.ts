export enum RoleType {
  Admin = 'Admin',
  Supplier = 'Supplier',
}

export interface DashboardState {
  userRole?: RoleType | undefined;
}

export const initialDashboardState: DashboardState = {};
