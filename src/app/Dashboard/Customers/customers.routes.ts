import { Routes } from '@angular/router';

import { CustomersLayouComponent } from './customers-layou.component';
import { CustomersManagementScreenComponent } from './pages/customers-management-screen/customers-management-screen.component';
import { CustomersScreenComponent } from './pages/customers-screen/customers-screen.component';

export const CustomersRoutes: Routes = [
  {
    path: '',
    component: CustomersLayouComponent,
    children: [
      {
        path: '',
        component: CustomersScreenComponent,
      },
      {
        path: ':id',
        component: CustomersManagementScreenComponent,
      },
    ],
  },
];
