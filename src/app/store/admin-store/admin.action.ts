import {createAction, props} from "@ngrx/store";
import {IConfig} from "./admin.state";

export const changeCityAction = createAction(
  '[admin] Change Current City',
  props<{ city: string }>()
);

export const getConfigAction = createAction(
  '[admin] Load Config'
);

export const getConfigActionSuccess = createAction(
  '[admin] Config Loaded Success',
  props<{ config: IConfig[]}>()
);

export const addConfigAction = createAction(
  '[admin] Add New Config',
  props<{city: string, units: string, interval: number}>()
);

export const updateConfigAction = createAction(
  '[admin] Config Updated',
  props<{id: number, data: {city: string, units: string, interval: number}}>()
);

export const deleteConfigAction = createAction(
  '[admin] Delete Config',
  props<{id: number}>()
);
