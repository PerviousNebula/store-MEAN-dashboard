import { Component, OnInit } from '@angular/core';

import { ShippingAddress } from 'src/app/Core/models';

@Component({
  selector: 'app-orders-management-form',
  templateUrl: './orders-management-form.component.html'
})
export class OrdersManagementFormComponent implements OnInit {
  showShippingAddressForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateShippingAddress([shippingAddress]: ShippingAddress[]): void {
    console.log(shippingAddress);
  }

}
