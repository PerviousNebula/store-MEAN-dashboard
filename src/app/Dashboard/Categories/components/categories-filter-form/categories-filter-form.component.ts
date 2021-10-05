import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories-filter-form',
  templateUrl: './categories-filter-form.component.html'
})
export class CategoriesFilterFormComponent implements OnInit {
  categoriesFilterFg: FormGroup;

  constructor() {
    this.categoriesFilterFg = new FormGroup({
      name: new FormControl(null),
      archive: new FormControl(false),
    });
  }

  ngOnInit(): void {
  }

  filter(): void {
    console.log(this.categoriesFilterFg.value);
  }

  clearFilters(): void {
    this.categoriesFilterFg.reset({ archive: false });
  }

}
