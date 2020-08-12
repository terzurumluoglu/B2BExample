import { Injectable, Injector } from '@angular/core';
import { ProductService } from "../product/product.service";
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _productService: ProductService;
  public get productService(): ProductService {
    if (!this._productService) {
      this._productService = this.injector.get(ProductService);
    }
    return this._productService;
  }

  constructor(private injector: Injector) { }

  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  getProduct(id: number): Product {
    return this.productService.getProduct(id);
  }

}