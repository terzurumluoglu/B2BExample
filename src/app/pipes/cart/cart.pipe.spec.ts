import { CartPipe } from './cart.pipe';
import { mockProducts,mockProductsRepeating } from 'src/app/datas/mock';
import { Product } from 'src/app/models/product';

describe('CartPipe', () => {

  let pipe : CartPipe;
  let mock : Product[] = mockProducts;
  let mockRepeating : Product[] = mockProductsRepeating;
  
  beforeEach(() => {
    pipe = new CartPipe();
  })
  it('create an instance', () => {
    pipe = new CartPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform', () => {
    const nonRepeating : Product[] = pipe.transform(mockRepeating);
    let count : number = 0;
    let len : number = mockRepeating.length;
    for (let i = 0; i < mockRepeating.length; i++) {
      let p : Product = mockRepeating.find(f => f.id == mockRepeating[i].id);
      if (p) {
        mockRepeating = mockRepeating.filter(f => f.id !== mockRepeating[i].id);
        len = mockRepeating.length;
        count++;
        --i;
      }
    }
    expect(count).toEqual(nonRepeating.length);
  })

  it('calculateQuantity should work successfully',() => {
    const count : number = pipe.calculateQuantity(mock).filter(i => i !== null).length;
    expect(count).toEqual(mock.length);
  })
});
