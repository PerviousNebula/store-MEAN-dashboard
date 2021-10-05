import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./Dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
];
