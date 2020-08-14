import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from 'src/app/models/product';
import { mockProducts,mockProducts$ } from "../../datas/mock";

let service: ProductService;

describe('ProductService', () => {

  let mock : Product[] = mockProducts;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllProducts should work', () => {
    let reel: Product[] = service.getAllProducts();
    expect(reel).toEqual(mock);
  });

  it('getProduct should working', () => {
    let response: Product = service.getProduct(2);
    const p: Product = mock.find(i => i.id == 2);
    expect(response).toEqual(p);
  });

});
