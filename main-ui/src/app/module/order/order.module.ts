import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { OrderAddressComponent } from './components/order-address/order-address.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [OrderComponent, OrderListComponent, ProfileComponent, ProductListComponent, ProductComponent, OrderAddressComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot()
  ]
})
export class OrderModule { }
