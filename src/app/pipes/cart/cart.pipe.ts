import { Pipe, PipeTransform } from '@angular/core';
import { Product, ProductsList } from 'src/app/models/product';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {
  products: Product[];
  productsList: ProductsList = new ProductsList();
  transform(datas: Product[]): any {
    this.products = [];
    const quantity: number[] = this.calculateQuantity(datas);
    for (let i = 0; i < quantity.length; i++) {
      if (quantity[i]) {
        const p: Product = datas.find(f => f.id == i);
        const product: Product = this.productsList.createProduct({ id: i, name: p.name, description: p.description, price: p.price, quantity: quantity[i] });
        this.products.push(product);
      }
    }
    return this.products;
  }

  calculateQuantity(datas: Product[]): number[] {
    let quantity: number[] = [];
    datas.forEach((element: Product) => {
      quantity[element.id] = quantity[element.id] ? (quantity[element.id] = quantity[element.id] + 1) : 1;
    });
    return quantity;
  }
}
