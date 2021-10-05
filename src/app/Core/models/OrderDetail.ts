import { Product, Size } from './';

export interface OrderDetail {
  id: string;
  quantity: number;
  total: number;
  product: Product;
  size: Size;
}
