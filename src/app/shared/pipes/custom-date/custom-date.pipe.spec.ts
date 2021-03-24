import { CustomDatePipe } from './custom-date.pipe';

describe('CustomDatePipe', () => {
  const customDatePipe = new CustomDatePipe();

  it('create an instance', () => {
    expect(customDatePipe).toBeTruthy();
  });

  it('should format to dd/MM/yyyy dates in the yyyy-MM-dd format', () => {
    expect(customDatePipe.transform('2021-04-31T00:00:00')).toBe('31/04/2021');
    expect(customDatePipe.transform('2021-01-01T00:00:00')).toBe('01/01/2021');
    expect(customDatePipe.transform('2021-04-31')).toBe('01/01/2021');
  });
});
