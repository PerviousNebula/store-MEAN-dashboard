import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from 'src/app/Shared/shared.module';

// Routes
import { ProductRoutes } from './products.routes';

// Components
import { ProductsLayoutComponent } from './products-layout.component';
import { ProductsScreenComponent } from './pages/products-screen/products-screen.component';
import { ProductsFilterFormComponent } from './components/products-filter-form/products-filter-form.component';
import { ProductsManagementScreenComponent } from './pages/products-management-screen/products-management-screen.component';
import { ProductsManagementFormComponent } from './components/products-management-form/products-management-form.component';

@NgModule({
  declarations: [
    ProductsLayoutComponent,
    ProductsScreenComponent,
    ProductsFilterFormComponent,
    ProductsManagementScreenComponent,
    ProductsManagementFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProductRoutes),
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductsModule { }
