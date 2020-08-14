import { Component, OnInit } from '@angular/core';
import { FacadeService } from 'src/app/services/facade/facade.service';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _facadeService : FacadeService) { }

  products : Product[];
  ngOnInit(): void {
    this.products = this.getAllProducts();
  }

  getAllProducts(){
    return this._facadeService.getAllProducts();
  }

  addToBasket(product : Product){
    this._facadeService.addProduct(product);
  }
}