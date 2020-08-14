import { Injectable, Injector } from '@angular/core';
import { ProductService } from "../product/product.service";
import { Product } from 'src/app/models/product';
import { CartService } from '../cart/cart.service';

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

  private _cartService: CartService;
  public get cartService(): CartService {
    if (!this._cartService) {
      this._cartService = this.injector.get(CartService);
    }
    return this._cartService;
  }

  constructor(private injector: Injector) { }

  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  getProduct(id: number): Product {
    return this.productService.getProduct(id);
  }

  get products$(){
    return this.cartService.products$;
  }

  getBasket() {
    this.cartService.getBasket();
  }

  addProduct(product : Product) {
    this.cartService.addProduct(product);
  }


  deleteProductFromBasket(productId : number) {
    this.cartService.deleteProductFromBasket(productId);
  }

  decreaseProduct(product : Product) {
    this.cartService.decreaseProduct(product);
  }
}