import { createReducer, on } from "@ngrx/store";
import { from } from "rxjs";
// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  years: string[];
  makes: string[];
  models: string[];
  trim: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  years: [],
  makes: [],
  models: [],
  trim: [],
  loaded: false,
  loading: false,
};

export const fitmentReducer = createReducer(
  initialState,
  on(fromVehicle.loadYearsSuccess, (state, action) => ({
    ...state,
    years: action.years || [],
  })),
  on(fromVehicle.loadMakesSuccess, (state, action) => ({
    ...state,
    makes: action.makes || [],
  })),
  on(fromVehicle.loadModelsSuccess, (state, action) => ({
    ...state,
    models: action.models || [],
  })),
  on(fromVehicle.loadTrimSuccess, (state, action) => ({
    ...state,
    trim: action.trim || [],
  })),
  on(fromVehicle.resetMakes, (state, action) => ({
    ...state,
    makes: [],
  })),
  on(fromVehicle.resetModels, (state, action) => ({
    ...state,
    models: [],
  })),
  on(fromVehicle.resetTrim, (state, action) => ({
    ...state,
    trim: [],
  }))
);
