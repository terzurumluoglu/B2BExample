import { TestBed, inject, async } from '@angular/core/testing';

import { CartService } from './cart.service';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from 'src/app/reducer/reducer';

describe('CartService', () => {
  let service: CartService;

   // Add the imported module to the imports array in beforeEach 
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(AppReducers)
      ],
    })
    .compileComponents();
  }));

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
