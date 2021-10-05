import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Routes
import { SigninRoutes } from './signin.routes';

// Components
import { SigninLayoutComponent } from './signin-layout.component';
import { SigninScreenComponent } from './pages/signin-screen/signin-screen.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    SigninLayoutComponent,
    SigninScreenComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(SigninRoutes),
  ]
})
export class SigninModule { }
