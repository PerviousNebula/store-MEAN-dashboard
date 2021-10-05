import { Customer, OrderDetail, ShippingAddress } from '.';

export interface Order {
  id: string;
  orderNumber?: string;
  archive: boolean;
  total?: number;
  customer?: Customer;
  shippingAddress: ShippingAddress;
  orderDetails?: OrderDetail[];
}
