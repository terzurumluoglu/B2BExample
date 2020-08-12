import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from "./cart/cart.service";
import { ProductService } from "./product/product.service";
import { FacadeService } from './facade/facade.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    CartService,
    ProductService,
    FacadeService
  ]
})
export class ServicesModule { }