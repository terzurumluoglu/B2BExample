import { Injectable } from '@angular/core';
import { Product, ProductsList } from "../../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList = new ProductsList;
  constructor() { }

  getAllProducts(): Product[] {
    return this.productList.getAllProducts();
  }

  getProduct(id: number) {
    return this.productList.getProduct(id);
  }
}