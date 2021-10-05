import { Routes } from '@angular/router';

import { ProductsLayoutComponent } from './products-layout.component';
import { ProductsScreenComponent } from './pages/products-screen/products-screen.component';
import { ProductsManagementScreenComponent } from './pages/products-management-screen/products-management-screen.component';

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductsLayoutComponent,
    children: [
      {
        path: '',
        component: ProductsScreenComponent,
      },
      {
        path: ':id',
        component: ProductsManagementScreenComponent,
      },
    ],
  },
];
