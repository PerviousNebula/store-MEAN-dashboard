import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ShippingAddress } from 'src/app/Core/models';

@Component({
  selector: 'app-customers-management-form',
  templateUrl: './customers-management-form.component.html'
})
export class CustomersManagementFormComponent implements OnInit {
  customerFg: FormGroup;

  constructor() {
    this.customerFg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      shippingAddresses: new FormArray([]),
      archive: new FormControl(false),
    });
  }

  ngOnInit(): void {
  }

  updateShippingAddresses(shippingAddresses: ShippingAddress[]): void {
    this.customerFg.get('shippingAddresses')?.reset();
    this.customerFg.get('shippingAddresses')?.patchValue(shippingAddresses);
    console.log(this.customerFg.get('shippingAddresses')?.value);
  }

  handleSubmit(): void {
    console.log(this.customerFg.value);
  }

}
