export const ADMIN_FEATURE_NAME = 'admin';

export interface IConfig {
  config_id: number;
  city_name: string;
  units: string;
  interval: number;
}

export interface IAdminState {
  currentCity: string;
  config?: IConfig[]
}

export const initialAdminState: IAdminState = {
  currentCity: 'Minsk',
};
