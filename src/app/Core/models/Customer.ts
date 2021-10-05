import { ShippingAddress } from '.';

export interface Customer {
  id: string;
  name: string;
  lastName: string;
  email: string;
  shippingAddress?: ShippingAddress[];
}
