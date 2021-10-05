import { Routes } from '@angular/router';

import { CategoriesLayoutComponent } from './categories-layout.component';
import { CategoriesScreenComponent } from './pages/categories-screen/categories-screen.component';
import { CategoriesManagementScreenComponent } from './pages/categories-management-screen/categories-management-screen.component';

export const CategoriesRoutes: Routes = [
  {
    path: '',
    component: CategoriesLayoutComponent,
    children: [
      {
        path: '',
        component: CategoriesScreenComponent,
      },
      {
        path: ':id',
        component: CategoriesManagementScreenComponent,
      },
    ],
  }
];
