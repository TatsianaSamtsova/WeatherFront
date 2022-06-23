import { createReducer, on } from '@ngrx/store';
import { initialAdminState } from './admin.state';
import {
  addConfigAction,
  changeCityAction,
  deleteConfigAction,
  getConfigAction,
  getConfigActionSuccess,
  updateConfigAction,
} from './admin.action';

export const adminReducer = createReducer(
  initialAdminState,
  on(changeCityAction, (state, { city }) => ({
    ...state,
    currentCity: city,
  })),
  on(getConfigActionSuccess, (state, { config }) => ({
    ...state,
    config,
  })),
  on(
    getConfigAction,
    // addConfigAction,
    // deleteConfigAction,
    // updateConfigAction,
    (state) => ({
      ...state,
    })
  )
);
