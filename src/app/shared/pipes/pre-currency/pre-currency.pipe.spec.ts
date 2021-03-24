import { PreCurrencyPipe } from './pre-currency.pipe';

describe('PreCurrencyPipe', () => {
  const preCurrencyPipe: PreCurrencyPipe = new PreCurrencyPipe();

  it('create an instance', () => {
    expect(preCurrencyPipe).toBeTruthy();
  });

  it('should format raw currency number', () => {
    expect(preCurrencyPipe.transform(3532542)).toBe(35325.42);
    expect(preCurrencyPipe.transform(45676)).toBe(456.76);
    expect(preCurrencyPipe.transform(24575756858)).toBe(245757568.58);
  });
});
