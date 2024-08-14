import { SortProductByPricePipe } from './sortProductByPrice.pipe';

describe('SortProductPipe', () => {
  it('create an instance', () => {
    const pipe = new SortProductByPricePipe();
    expect(pipe).toBeTruthy();
  });
});
