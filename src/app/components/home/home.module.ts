import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartPipe } from 'src/app/pipes/cart/cart.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    BasketComponent,
    ProductComponent,
    NavbarComponent,
    
    CartPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }