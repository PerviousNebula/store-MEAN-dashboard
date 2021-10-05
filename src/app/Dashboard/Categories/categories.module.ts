import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from 'src/app/Shared/shared.module';

// Routes
import { CategoriesRoutes } from './categories.routes';

// Components
import { CategoriesLayoutComponent } from './categories-layout.component';
import { CategoriesScreenComponent } from './pages/categories-screen/categories-screen.component';
import { CategoriesFilterFormComponent } from './components/categories-filter-form/categories-filter-form.component';
import { CategoriesManagementScreenComponent } from './pages/categories-management-screen/categories-management-screen.component';
import { CategoriesManagementFormComponent } from './components/categories-management-form/categories-management-form.component';

@NgModule({
  declarations: [
    CategoriesLayoutComponent,
    CategoriesScreenComponent,
    CategoriesFilterFormComponent,
    CategoriesManagementScreenComponent,
    CategoriesManagementFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CategoriesRoutes),
    SharedModule,
  ]
})
export class CategoriesModule { }
