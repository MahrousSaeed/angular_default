import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

import {RouterModule,Route} from '@angular/router'

const productsRoutes:Route[] = [
  {
    path:'',
    component:ProductsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
]

@NgModule({
  declarations: [ProductsComponent, CartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes)
  ]
})
export class ProductsModule { }
