import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
  name: 'cart'
})
export class CartPipe implements PipeTransform {
  products: Product[];
  transform(datas: Product[]): any {
    this.products = [];
    const quantity: number[] = this.calculateQuantity(datas);
    for (let i = 0; i < quantity.length; i++) {
      if (quantity[i]) {
        // const id : number = i;
        const p : Product = datas.find(f => f.id == i);
        const product : Product = new Product(i,p.name,p.description,p.price,quantity[i]);
        this.products.push(product);
      }
    }
    console.log(this.products);
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
