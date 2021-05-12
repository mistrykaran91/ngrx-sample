import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as VehicleActions from "../actions/vehicle.action";

@Injectable()
export class VehicleEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadYears$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.loadYears),
      switchMap(() => {
        const url = "https://6080be3273292b0017cdbf2a.mockapi.io/years";
        return this.http.get<any>(url).pipe(
          map((response) => {
            const years = response.year as string[];
            return VehicleActions.loadYearsSuccess({ years });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  loadMakes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.loadMakes),
      switchMap((action) => {
        const url = `https://6080be3273292b0017cdbf2a.mockapi.io/makes?year=${action.year}`;
        return this.http.get<any>(url).pipe(
          map((response) => {
            const makes = response.make as string[];
            return VehicleActions.loadMakesSuccess({ makes });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  loadModels$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.loadModels),
      switchMap((action) => {
        const url = `https://6080be3273292b0017cdbf2a.mockapi.io/models?year=${action.year}&make=${action.make}`;
        return this.http.get<any>(url).pipe(
          map((response) => {
            const models = response.model as string[];
            return VehicleActions.loadModelsSuccess({ models });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });

  loadTrim$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(VehicleActions.loadTrim),
      switchMap((action) => {
        const url = `https://6080be3273292b0017cdbf2a.mockapi.io/trim?year=${action.year}&make=${action.make}&model=${action.model}`;
        return this.http.get<any>(url).pipe(
          map((response) => {
            const trim = response.trim as string[];
            return VehicleActions.loadTrimSuccess({ trim });
          }),
          catchError(() => EMPTY)
        );
      })
    );
  });
}
