import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders-filter-form',
  templateUrl: './orders-filter-form.component.html'
})
export class OrdersFilterFormComponent implements OnInit {
  ordersFilterFg: FormGroup;

  constructor() {
    this.ordersFilterFg = new FormGroup({
      orderNumber: new FormControl(null),
      email: new FormControl(null),
      minPrice: new FormControl(null),
      maxPrice: new FormControl(null),
      country: new FormControl(null),
      archive: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  clearFilters(): void {
    this.ordersFilterFg.reset({ archive: false });
  }

  handleFilter(): void {
    console.log(this.ordersFilterFg.value);
  }

}
