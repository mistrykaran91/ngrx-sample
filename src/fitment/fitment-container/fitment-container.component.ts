import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as Reducers from "../store/reducers";
import * as Actions from "../store/actions/vehicle.action";
import * as Selectors from "../store/selectors/vehicle.selector";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"],
})
export class FitmentContainerComponent implements OnInit {
  mainform: FormGroup;
  years$ = this.store.select(Selectors.getYears);
  makes$ = this.store.select(Selectors.getMakes);
  models$ = this.store.select(Selectors.getModels);
  trim$ = this.store.select(Selectors.getTrim);

  // import the store into the constructor
  constructor(
    private store: Store<Reducers.FitmentState>,
    private fb: FormBuilder
  ) {
    this.store.dispatch(Actions.loadYears());
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.mainform = this.fb.group({
      year: ["", Validators.required],
      make: ["", Validators.required],
      model: ["", Validators.required],
    });
  }

  onYearChange() {
    const { year } = this.mainform.value;
    // Added as this was stated in problem statement
    if (year === "2021") {
      this.store.dispatch(Actions.loadMakes({ year }));
    }

    this.store.dispatch(Actions.resetMakes());
    this.store.dispatch(Actions.resetModels());
    this.store.dispatch(Actions.resetTrim());
  }

  onMakeChange() {
    const { year, make } = this.mainform.value;
    // Added as this was stated in problem statement
    if (make === "Acura") {
      this.store.dispatch(Actions.loadModels({ year, make }));
      return;
    }

    this.store.dispatch(Actions.resetModels());
    this.store.dispatch(Actions.resetTrim());
  }

  onModelChange() {
    const { year, make, model } = this.mainform.value;
    // Added as this was stated in problem statement
    if (model === "RDX") {
      this.store.dispatch(Actions.loadTrim({ year, make, model }));
      return;
    }

    this.store.dispatch(Actions.resetTrim());
  }

  get isValidYear() {
    return (
      this.mainform?.get("year")?.value &&
      this.mainform.get("year").value === "2021"
    );
  }

  get isValidMake() {
    return (
      this.mainform?.get("make")?.value &&
      this.mainform.get("make").value === "Acura"
    );
  }

  get isValidModel() {
    return (
      this.mainform?.get("model")?.value &&
      this.mainform.get("model").value === "RDX"
    );
  }

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
