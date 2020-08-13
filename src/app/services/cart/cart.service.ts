import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducer/reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetProducts, DeleteProduct, AddProduct, UpdateProduct, DecreaseProduct } from 'src/app/reducer/actions';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private store: Store<AppState>) { }

  products$: Observable<any[]> = this.store
    .select(s => s.product)
    .pipe(map(b => b.products));

  getBasket() {
    this.store.dispatch(GetProducts({ products: [] }));
  }

  addProduct(product: Product) {
    this.store.dispatch(AddProduct({ product: product }));
  }

  updateProduct(product: Product) {
    this.store.dispatch(UpdateProduct({ product: product }));
  }

  deleteProductFromBasket(product: Product) {
    console.log(product.quantity);
    if (product.quantity <= 1) {
      this.store.dispatch(DeleteProduct({ id: product.id }));
    } else {
      console.log('Burada');
      this.store.dispatch(DecreaseProduct({ product }));
    }
  }
}