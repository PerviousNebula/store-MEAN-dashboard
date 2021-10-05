import { Customer } from '.';

export interface ShippingAddress {
  id: string;
  name: string;
  shippingAddress1: string;
  country: string;
  state: string;
  city: string;
  postalCode: string;
  archive: boolean;
  customer?: Customer;
}
