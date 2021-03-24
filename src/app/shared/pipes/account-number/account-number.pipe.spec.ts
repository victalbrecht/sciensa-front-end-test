import { AccountNumberPipe } from './account-number.pipe';

describe('AccountNumberPipe', () => {
  const accountNumberPipe = new AccountNumberPipe();

  it('create an instance', () => {
    expect(accountNumberPipe).toBeTruthy();
  });

  it('should put a dash before the last digit of a given number', () => {
    expect(accountNumberPipe.transform(4534522)).toBe('453452-2');
    expect(accountNumberPipe.transform(56756734528)).toBe('5675673452-8');
    expect(accountNumberPipe.transform(12)).toBe('1-2');
  });
});
