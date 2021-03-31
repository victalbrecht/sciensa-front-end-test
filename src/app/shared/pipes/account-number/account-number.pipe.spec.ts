import { AccountNumberPipe } from './account-number.pipe';

describe('AccountNumberPipe', () => {
  const accountNumberPipe = new AccountNumberPipe();

  it('create an instance', () => {
    expect(accountNumberPipe).toBeTruthy();
  });

  it('should format a given account number', () => {
    expect(accountNumberPipe.transform(4534522)).toBe('CC 453452-2');
    expect(accountNumberPipe.transform(56756734528)).toBe('CC 5675673452-8');
    expect(accountNumberPipe.transform(12)).toBe('CC 1-2');
    expect(accountNumberPipe.transform(null)).toBe(null);
  });
});
