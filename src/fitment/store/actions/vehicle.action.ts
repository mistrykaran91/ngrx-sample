import { Action, createAction, props } from "@ngrx/store";
// import model/interface from db.json here...

// Action constants

export const loadYears = createAction("[Fitment] Load Years");
export const loadYearsSuccess = createAction(
  "[Fitment] Load Years Success",
  props<{ years: string[] }>()
);
export const loadYearsFail = createAction("[Fitment] Load Years Fail");

export const loadMakes = createAction(
  "[Fitment] Load Makes",
  props<{ year: string }>()
);
export const loadMakesSuccess = createAction(
  "[Fitment] Load Makes Success",
  props<{ makes: string[] }>()
);
export const loadMakesFail = createAction("[Fitment] Load Makes Fail");

export const loadModels = createAction(
  "[Fitment] Load Models",
  props<{ year: string; make: string }>()
);
export const loadModelsSuccess = createAction(
  "[Fitment] Load Models Success",
  props<{ models: string[] }>()
);
export const loadModelsFail = createAction("[Fitment] Load Models Fail");

export const loadTrim = createAction(
  "[Fitment] Load Trim",
  props<{ year: string; make: string; model: string }>()
);
export const loadTrimSuccess = createAction(
  "[Fitment] Load Trim Success",
  props<{ trim: string[] }>()
);
export const loadTrimFail = createAction("[Fitment] Load Trim Fail");

export const resetMakes = createAction("[Fitment] Reset Makes");
export const resetModels = createAction("[Fitment] Reset Models");
export const resetTrim = createAction("[Fitment] Reset Trim");
