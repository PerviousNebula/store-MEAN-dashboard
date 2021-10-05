import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products-filter-form',
  templateUrl: './products-filter-form.component.html'
})
export class ProductsFilterFormComponent implements OnInit {
  productsFilterFg: FormGroup;

  constructor() {
    this.productsFilterFg = new FormGroup({
      name: new FormControl(null),
      categoryId: new FormControl(null),
      archive: new FormControl(false),
      minPrice: new FormControl(null),
      maxPrice: new FormControl(null),
      minStock: new FormControl(null),
      maxStock: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  clearFilters(): void {
    this.productsFilterFg.reset({ archive: false });
  }

  handleSubmit(): void {
    console.log(this.productsFilterFg.value);
  }

}
