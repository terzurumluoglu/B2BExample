import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _facadeService : FacadeService) { }

  products : Product[];
  ngOnInit(): void {
    this.products = this._facadeService.getAllProducts();
  }

  addToBasket(product : Product){
    console.log(product);
  }
}