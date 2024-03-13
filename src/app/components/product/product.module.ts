import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CurrentPricePipe } from '@pipes/currentPrice.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    CurrentPricePipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],


})
export class ProductModule { }
