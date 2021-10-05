import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/Shared/shared.module';

// Routes
import { CustomersRoutes } from './customers.routes';

// Components
import { CustomersLayouComponent } from './customers-layou.component';
import { CustomersScreenComponent } from './pages/customers-screen/customers-screen.component';
import { CustomersFilterFormComponent } from './components/customers-filter-form/customers-filter-form.component';
import { CustomersManagementScreenComponent } from './pages/customers-management-screen/customers-management-screen.component';
import { CustomersManagementFormComponent } from './components/customers-management-form/customers-management-form.component';

@NgModule({
  declarations: [
    CustomersLayouComponent,
    CustomersScreenComponent,
    CustomersFilterFormComponent,
    CustomersManagementScreenComponent,
    CustomersManagementFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CustomersRoutes),
    SharedModule,
  ]
})
export class CustomersModule { }
