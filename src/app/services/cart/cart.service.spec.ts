import { TestBed, inject, async } from '@angular/core/testing';

import { CartService } from './cart.service';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from 'src/app/reducer/reducer';
import { Product } from 'src/app/models/product';
import { mockProducts } from 'src/app/datas/mock';
import { Observable,of } from "rxjs";

describe('CartService', () => {
  let service: CartService;
  let mock : Product = mockProducts.find(i => i.id == 1);

   // Add the imported module to the imports array in beforeEach 
   beforeEach(() => {
    //  service = svc;
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(AppReducers)
      ],
    })
    .compileComponents();
    service = TestBed.get(CartService);
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
  
  it('addProduct should work', (done) => {
    service.addProduct(mock);
    service.products$.subscribe(p => {
      expect(p[0]).toEqual(mock);
      done();
    });
  });


  // addProduct(product: Product) {
  //   this.store.dispatch(AddProduct({ product: product }));
  // }

});
