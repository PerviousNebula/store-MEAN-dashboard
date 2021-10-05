import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./Signin/signin.module').then(m => m.SigninModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
];
