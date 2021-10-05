import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routes
import { HomeRoutes } from './home.routes';

// Components
import { HomeLayoutComponent } from './home-layout.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeScreenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
  ]
})
export class HomeModule { }
