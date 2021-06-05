import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";

const materialModules = [
  MatSelectModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatCheckboxModule,
  MatCardModule,
  MatRadioModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { floatLabel: "always" },
    },
  ],
})
export class MaterialModule {}
