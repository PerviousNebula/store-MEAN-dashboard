import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./Home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'orders',
        loadChildren: () => import('./Orders/orders.module').then(m => m.OrdersModule),
      },
      {
        path: 'categories',
        loadChildren: () => import('./Categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: 'products',
        loadChildren: () => import('./Products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'customers',
        loadChildren: () => import('./Customers/customers.module').then(m => m.CustomersModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home',
      },
    ],
  },
];
