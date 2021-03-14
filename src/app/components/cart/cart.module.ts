import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CartListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CartComponent},
    ]),
  ]
})
export class CartModule { }
