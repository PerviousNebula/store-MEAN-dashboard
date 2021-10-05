import { Category, Size } from '.';

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  stock: number;
  archive: boolean;
  size: Size[];
  category: Category;
}
