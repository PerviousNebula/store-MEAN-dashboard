import { Routes } from '@angular/router';

import { OrdersLayoutComponent } from './orders-layout.component';
import { OrdersScreenComponent } from './pages/orders-screen/orders-screen.component';
import { OrdersManagementScreenComponent } from './pages/orders-management-screen/orders-management-screen.component';

export const OrdersRoutes: Routes = [
  {
    path: '',
    component: OrdersLayoutComponent,
    children: [
      {
        path: '',
        component: OrdersScreenComponent,
      },
      {
        path: ':id',
        component: OrdersManagementScreenComponent,
      },
    ],
  },
];
