import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IAdminState, ADMIN_FEATURE_NAME} from "./admin.state";

const selectFeature = createFeatureSelector<IAdminState>(ADMIN_FEATURE_NAME)

export const getCurrentCity = createSelector(
  selectFeature,
  state => state.currentCity
)

export const getCurrentConfig = createSelector(
  selectFeature,
  state => state.config
)
