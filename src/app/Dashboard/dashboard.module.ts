import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Routes
import { DashboardRoutes } from './dashboard.routes';

// Modules
import { SharedModule } from '../Shared/shared.module';

// Components
import { DashboardLayoutComponent } from './dashboard-layout.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModule,
  ]
})
export class DashboardModule { }
