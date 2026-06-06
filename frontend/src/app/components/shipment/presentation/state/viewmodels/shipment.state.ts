import { Shipment } from '../../../domain/entities/shipment';

export interface LoginState {
  currentShipment?: Shipment;
}

export const initialLoginState: LoginState = {};
