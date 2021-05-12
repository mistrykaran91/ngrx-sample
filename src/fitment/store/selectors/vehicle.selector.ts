import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as Reducer from "../reducers";

const fitmentState = createFeatureSelector<Reducer.FitmentState>("fitment");

const vehicleState = createSelector(fitmentState, (state) => state.vehicle);

export const getYears = createSelector(
  vehicleState,
  (state) => state && state.years
);

export const getMakes = createSelector(
  vehicleState,
  (state) => state && state.makes
);

export const getModels = createSelector(
  vehicleState,
  (state) => state && state.models
);

export const getTrim = createSelector(
  vehicleState,
  (state) => state && state.trim
);
