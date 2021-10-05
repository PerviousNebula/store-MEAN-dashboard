import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routes
import { AuthRoutes } from './auth.routes';

// Components
import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
  ]
})
export class AuthModule { }
