import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers-filter-form',
  templateUrl: './customers-filter-form.component.html'
})
export class CustomersFilterFormComponent implements OnInit {
  customerFilterFg: FormGroup;

  constructor() {
    this.customerFilterFg = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      archive: new FormControl(false),
    });
  }

  ngOnInit(): void {
  }

  clearFilters(): void {
    this.customerFilterFg.reset({ archive: false });
  }

  handleFilter(): void {
    console.log(this.customerFilterFg.value);
  }

}
