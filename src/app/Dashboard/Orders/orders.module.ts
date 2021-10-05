import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from 'src/app/Shared/shared.module';

// Routes
import { OrdersRoutes } from './orders.routes';

// Components
import { OrdersLayoutComponent } from './orders-layout.component';
import { OrdersScreenComponent } from './pages/orders-screen/orders-screen.component';
import { OrdersFilterFormComponent } from './components/orders-filter-form/orders-filter-form.component';
import { OrdersManagementScreenComponent } from './pages/orders-management-screen/orders-management-screen.component';
import { OrdersManagementFormComponent } from './components/orders-management-form/orders-management-form.component';

@NgModule({
  declarations: [
    OrdersLayoutComponent,
    OrdersScreenComponent,
    OrdersFilterFormComponent,
    OrdersManagementScreenComponent,
    OrdersManagementFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(OrdersRoutes),
    SharedModule,
  ]
})
export class OrdersModule { }
