import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ShippingAddressFormComponent } from './components/shipping-address-form/shipping-address-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PageTitleComponent,
    ShippingAddressFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    PageTitleComponent,
    ShippingAddressFormComponent,
  ]
})
export class SharedModule { }
