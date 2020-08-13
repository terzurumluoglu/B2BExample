import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products$ = this._facadeService.products$;
  constructor(
    private _facadeService: FacadeService
  ) { }

  ngOnInit(): void {
  }

  delete(product: Product) {
    this._facadeService.decreaseProduct(product);
  }

  add(product: Product) {
    this._facadeService.addProduct(product);
  }

  remove(productId : number){
    this._facadeService.deleteProductFromBasket(productId)
  }
}
