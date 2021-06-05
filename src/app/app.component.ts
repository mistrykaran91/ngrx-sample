import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductData } from "./data";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  name = "Angular";
  productForm: FormGroup;
  productCategories = ProductData.ProductCategories;
  productSuppliers = ProductData.ProductSuppliers;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.productForm = this.formBuilder.group({
      productName: ["", [Validators.required]],
      description: [""],
      price: [null],
      category: [null, Validators.required],
      supplier: [null, Validators.required],
      sendCatalog: [false],
    });
  }
}
