import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { ShippingAddress } from 'src/app/Core/models';

@Component({
  selector: 'app-shipping-address-form',
  templateUrl: './shipping-address-form.component.html'
})
export class ShippingAddressFormComponent implements OnInit, OnChanges {
  shippingAddressesFg: FormGroup;

  @Input() addMultipleAddresses = false;
  @Output() validShippingAddresses = new EventEmitter<ShippingAddress[]>();

  constructor() {
    this.shippingAddressesFg = new FormGroup({
      addresses: new FormArray([], [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.shippingAddressesFormArray?.statusChanges.subscribe((status) => {
      if (status === 'VALID') {
        this.validShippingAddresses.emit(this.shippingAddressesFormArray.value);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.addMultipleAddresses.currentValue) {
      this.addShippingAddress();
    }
  }

  get shippingAddressesFormArray(): FormArray {
    return this.shippingAddressesFg.get('addresses') as FormArray;
  }

  createShippingAddress(): FormGroup {
    return new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      shippingAddress1: new FormControl(null, [Validators.required]),
      country: new FormControl(null, []),
      state: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      postalCode: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      archive: new FormControl(false),
    });
  }

  addShippingAddress(): void {
    this.shippingAddressesFormArray.push(this.createShippingAddress());
  }

  removeShippingAddress(index: number): void {
    this.shippingAddressesFormArray.removeAt(index);
  }

}
